import { Controller, Get, Post, Body, Param, Delete, BadRequestException, Res, Put, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const data= this.userService.createUser(createUserDto, res);
    if(!data) throw new BadRequestException('Invalid data');
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.userService.findOne(id);
  }
  
  @Put(':id')
  update(@Param('id', new ParseIntPipe()) id: number, 
  @Body() updateUserDto: UpdateUserDto, 
  @Res() res: Response ) {
    return this.userService.update(id, updateUserDto, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
