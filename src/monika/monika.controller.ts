import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe, BadRequestException } from '@nestjs/common';
import { MonikaService } from './monika.service';
import { CreateMonikaDto } from './dto/create-monika.dto';
import { UpdateMonikaDto } from './dto/update-monika.dto';

@Controller('monika')
export class MonikaController {
  constructor(private readonly monikaService: MonikaService) {}

  @Post()
  create(@Body() createMonikaDto: CreateMonikaDto) {
    const data= this.monikaService.create(createMonikaDto);
    if(!data) throw new BadRequestException('Invalid data');
  }

  @Get()
  findAll() {
    return this.monikaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',new ParseUUIDPipe()) id: number) {
    return this.monikaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonikaDto: UpdateMonikaDto) {
    return this.monikaService.update(+id, updateMonikaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monikaService.remove(+id);
  }
}
