import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { MonikaModule } from './monika/monika.module';

@Module({
  imports: [MonikaModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
