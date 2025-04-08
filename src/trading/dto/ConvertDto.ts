import { IsString, IsNumber, Min } from 'class-validator';

export class ConvertDto {
  @IsString({})
  from: 'NGN' | 'USD' | 'EUR';

  @IsString()
  to: 'NGN' | 'USD' | 'EUR';

  @IsNumber()
  @Min(0)
  amount: number;
}
