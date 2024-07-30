import { Module } from '@nestjs/common';
import { MonikaService } from './monika.service';
import { MonikaController } from './monika.controller';
import { EmailService } from './email/email.service';

@Module({
  controllers: [MonikaController],
  providers: [{
    provide: MonikaService,
    useFactory: () => {
      return new MonikaService('Monika',EmailService);
    },
    inject: [EmailService],

  }, EmailService],
})
export class MonikaModule {}
