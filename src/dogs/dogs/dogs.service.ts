import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './dog.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog)
        private dogRepository: Repository<Dog>,
    ) { }

    async findAll(): Promise<Dog[]> {
        return await this.dogRepository.find();
    }

    async create(dog: Dog): Promise<Dog> {
        return await this.dogRepository.save(dog);
    }

    async update(dog: Dog): Promise<Dog> {
        await this.dogRepository.update(dog.id, dog);
        return await this.dogRepository.findOne(dog.id);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.dogRepository.delete(id);
    }

}