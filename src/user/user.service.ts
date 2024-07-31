import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    
    @InjectRepository(User) private readonly userRepository: Repository<User>,

  ) {
  }

  async createUser(createUserDto: CreateUserDto, @Res() res: any): Promise<User | null> {
   
    const user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.gender = createUserDto.gender;
    const response = await this.userRepository.save(user);
    return res.status(201).json(response);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto, @Res() res: any): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    user.name = updateUserDto.name || user.name;
    user.age = updateUserDto.age || user.age;
    user.email = updateUserDto.email || user.email;
    user.username = updateUserDto.username || user.username;
    user.password = updateUserDto.password || user.password;
    const updated = await this.userRepository.save(user);
    return res.status(200).json(updated);
  }

  remove(id: number): string {
    return id.toString();
    // return this.userRepository.delete(id);
  }
}
