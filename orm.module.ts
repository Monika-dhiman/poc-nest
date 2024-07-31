import { Module } from '@nestjs/common';
import { databaseConfig } from 'orm-config';

@Module({
  providers: [...databaseConfig],
  exports: [...databaseConfig],
})
export class DatabaseModule {}