import { Module } from '@nestjs/common';
import { DogsService } from './dogs/dogs.service';
import { DogsController } from './dogs/dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dogs/dog.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dog]),
  ],
  providers: [DogsService],
  controllers: [DogsController]
})
export class DogsModule { }
