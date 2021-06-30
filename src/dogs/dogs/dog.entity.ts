import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    race: string;

    @Column()
    color: string;

    @Column()
    age: number;
}