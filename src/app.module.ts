import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '1234',
  database: 'realestate',
  autoLoadEntities: true,
  synchronize: true,
}),

    AuthModule,
    UsersModule,
    PropertiesModule,
  ],
})
export class AppModule {}
