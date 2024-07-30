import { Injectable } from '@nestjs/common';
import { CreateMonikaDto } from './dto/create-monika.dto';
import { UpdateMonikaDto } from './dto/update-monika.dto';
import { EmailService } from './email/email.service';

@Injectable()
export class MonikaService {
  private name:string;
  constructor(name:string,private readonly emailService:EmailService) {
    console.log(name);
    this.name=name;

  }
  create(createMonikaDto: CreateMonikaDto) {
    return 'This action adds a new monika';
  }

  findAll() {
    return `This action returns all monika`;
  }

  findOne(id: number) {
    return `This action returns a #${id} monika`;
  }

  update(id: number, updateMonikaDto: UpdateMonikaDto) {
    return `This action updates a #${id} monika`;
  }

  remove(id: number) {
    return `This action removes a #${id} monika`;
  }
}
