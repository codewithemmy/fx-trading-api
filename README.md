<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Fx Trading App API

# Overview

TFx Trading App API allows users to register , get verified and is able to get real time FX exchange rates and can also convert rates and trade. The API is deployed on Render and includes comprehensive documentation via Swagger and Postman.

## Features

1. **Authenticaton**:

   - Register users
   - verify users
   - reend otp
   - Login

2. **Wallet**:

   - Initial wallet of 0 for NGN, USD & EUR
   - Retrieve wallet.
   - fund wallet using paystack.

3. **Fx Exchange**:

   - Fetch real time exchange rate.
   - Fetch real time for individual exchange rate.

4. **Trading/Conversion**:

   - Trade and covert rates

5. **Transaction**:
   - Retrieve transaction regarding funding wallet and trading

## Technology Stack

- **Framework**: NestJS (Node.js)
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JWT (JSON Web Tokens) via `@nestjs/jwt` and `passport-jwt`
- **Validation**: `class-validator` and `class-transformer`
- **API Documentation**: Swagger (`@nestjs/swagger`)
- **Deployment**: Render
- **Version Control**: GitHub

---

## Base URL

The API is hosted at:  
**`https://musicbookingapi.onrender.com`**

## API Documentation

### Swagger Documentation

Explore the interactive Swagger UI for detailed endpoint descriptions, request/response schemas, and testing:  
[**Swagger Docs**](https://musicbookingapi.onrender.com/docs)

### Postman Documentation

Access the Postman collection for a comprehensive set of API requests with examples:  
[**Postman Docs**](https://documenter.getpostman.com/view/23195379/2sB2cRE5Jd)

## GitHub Repository

The source code is available at:  
[**GitHub Repo**](https://github.com/codewithemmy/Music-booking-app)

---

## Compile and run the project

```bash
#install dependencies
$ npm install

# development
$ npm run start:dev

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Environment Variables

- `PORT`: Server port (default: 7000).
- `POSTGRES_USER`: posgres user name.
- `POSTGRES_PASSWORD`: postgres password.
- `POSTGRES_DATABASE`: postgres database basae e.g neon.
- `POSTGRES_PORT`: postgres port number e.g 5432.
- `POSTGRES_HOST`: posgres host name.
- `SECRET_KEY`: Jwt secret key.
- `JWT_EXPIRY`: Jwt jwt expiry.
- `MAIL_USER`: smpt gmail user name.
- `MAIL_PASSWORD`: smpt gmail password.
- `MAIL_PASSWORD`: smpt host name.
- `REDIS_HOST`: redis host name e.g local.
- `REDIS_PORT`: redis port number 6379.
- `EXCHANGE_RATE_API_KEY`: exchange rate secret key.
- `PAYSTACK_SK_KEY`: paystack payment key.
- `PAYSTACK_BASE_URL`: paystack base url i.e https://api.paystack.co.

## Endpoints

Below is a summary of the key endpoints. Refer to the Swagger or Postman documentation for full details.

| **Endpoint**          | **Method** | **Description**                                   | **Protected** |
| --------------------- | ---------- | ------------------------------------------------- | ------------- |
| `/auth/login`         | POST       | Authenticate a user or artist                     | No            |
| `/users`              | POST       | Create a new user                                 | No            |
| `/users`              | GET        | Get all users                                     | Yes (JWT)     |
| `/users/:id`          | GET        | Get a user by ID                                  | Yes (JWT)     |
| `/users/profile/me`   | GET        | Get logged-in user profile                        | Yes (JWT)     |
| `/users/profile/me`   | PATCH      | Update logged-in user profile (excluding email)   | Yes (JWT)     |
| `/artists`            | POST       | Create a new artist                               | No            |
| `/artists`            | GET        | Get all artists                                   | No            |
| `/artists/:id`        | GET        | Get an artist by ID                               | No            |
| `/artists/profile/me` | GET        | Get logged-in artist profile                      | Yes (JWT)     |
| `/artists/profile/me` | PATCH      | Update logged-in artist profile (excluding email) | Yes (JWT)     |
| `/events`             | POST       | Create a new event                                | Yes (JWT)     |
| `/events`             | GET        | Get all events                                    | No            |
| `/events/:id`         | GET        | Get an event by ID                                | No            |
| `/events/:id`         | PATCH      | Update an event                                   | No            |
| `/events/:id`         | DELETE     | Delete an event                                   | No            |
| `/bookings`           | POST       | Create a new booking                              | Yes (JWT)     |
| `/bookings`           | GET        | Get all bookings                                  | Yes (JWT)     |
| `/bookings/:id`       | GET        | Get a booking by ID                               | Yes (JWT)     |
| `/bookings/:id`       | PATCH      | Update a booking                                  | Yes (JWT)     |
| `/bookings/:id`       | DELETE     | Cancel a booking                                  | Yes (JWT)     |

- **Protected Endpoints**: Require a Bearer token in the `Authorization` header, obtained from `/auth/login`.

---

## project structure

fx-trading-app/
├── src/
│ ├── auth/
│ │ ├── auth.module.ts
│ │ ├── auth.controller.ts
│ │ ├── auth.service.ts
│ │ └── dto/
│ ├── wallet/
│ │ ├── wallet.module.ts
│ │ ├── wallet.controller.ts
│ │ ├── wallet.service.ts
│ │ └── entities/wallet.entity.ts
│ ├── fx/
│ │ ├── fx.module.ts
│ │ ├── fx.controller.ts
│ │ ├── fx.service.ts
│ │ └── fx.cache.ts
│ ├── trading/
│ │ ├── trading.module.ts
│ │ ├── trading.controller.ts
│ │ ├── trading.service.ts
│ │ └── dto/
│ ├── transactions/
│ │ ├── transactions.module.ts
│ │ ├── transactions.controller.ts
│ │ ├── transactions.service.ts
│ │ └── entities/transaction.entity.ts
│ ├── common/
│ │ ├── guards/auth.guard.ts
│ │ ├── interceptors/error.interceptor.ts
│ │ └── utils/validation.pipe.ts
│ └── main.ts
├── test/
├── README.md
├── package.json
├── .env
└── docker-compose.yml

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
