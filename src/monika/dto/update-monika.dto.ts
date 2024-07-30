import { PartialType } from '@nestjs/mapped-types';
import { CreateMonikaDto } from './create-monika.dto';

export class UpdateMonikaDto extends PartialType(CreateMonikaDto) {}
