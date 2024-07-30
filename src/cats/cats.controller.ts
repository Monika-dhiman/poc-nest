import { Controller, Get, Param, Post, Put, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'Meow Meow! This action adds a new cat';
    }
    @Get() 
    findAll(): string {
        return 'Meow Meow! This returns all cats';
    }
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Meow Meow! This returns a #${id} cat`;
    }
    @Put(':id')
    updateOne(@Param() params: any): object {
        const id = params?.id || null;
        return {result: `Meow Meow! This updates a #${id} cat`};
    }
}
