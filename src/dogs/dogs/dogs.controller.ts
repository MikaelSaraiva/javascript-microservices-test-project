import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Dog } from './dog.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private dogsService: DogsService) { }

    @Get()
    index(): Promise<Dog[]> {
        return this.dogsService.findAll();
    }

    @Post('create')
    async create(@Body() dogData: Dog): Promise<any> {
        return this.dogsService.create(dogData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() dogData: Dog): Promise<any> {
        dogData.id = Number(id);
        console.log('Update #' + dogData.id)
        return this.dogsService.update(dogData);
    }
}