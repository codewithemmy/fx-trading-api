import { Injectable, BadRequestException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from '../wallet/entities/wallet.entity';
import { FxService } from '../fx/fx.service';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Injectable()
export class TradingService {
  constructor(
    @InjectRepository(Wallet) private walletRepo: Repository<Wallet>,
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
    private fxService: FxService,
  ) {}

  async convert(
    userId: string,
    from: 'NGN' | 'USD' | 'EUR',
    to: 'NGN' | 'USD' | 'EUR',
    amount: number,
  ) {
    try {
      if (amount <= 0) throw new BadRequestException('Amount must be positive');

      const validateWallet = await this.walletRepo.findOne({
        where: { user: { id: userId }, currency: from },
      });

      if (validateWallet.balance <= 0 || validateWallet.balance < amount)
        throw new BadRequestException('Insufficient balance');

      const rate = await this.fxService.getRate(from, to);

      const convertedAmount = amount * rate;

      const toWallet = await this.walletRepo.findOne({
        where: { user: { id: userId }, currency: to },
      });
      toWallet.balance += convertedAmount;

      validateWallet.balance -= amount;
      await this.walletRepo.save(validateWallet);
      await this.walletRepo.save(toWallet);

      await this.transactionRepo.save({
        amount,
        type: 'converstion',
        status: 'confirmed',
        rate,
        currency: to,
      });

      return { from, to, amount, converted: convertedAmount };
    } catch (error) {
      throw new HttpException(
        error?.message || 'Wallet funding failed',
        error?.status || 500,
      );
    }
  }
}
