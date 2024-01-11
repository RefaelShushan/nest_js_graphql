import { Injectable } from '@nestjs/common';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly userRepository: Repository<Car>,
  ) {}

  create(createCarInput: CreateCarInput):Promise<Car> {
    const car: Car = new Car();
    car.name = createCarInput.name;
    car.color = createCarInput.color;
    car.model = createCarInput.model;
    return this.userRepository.save(car);
  }

  findAll():Promise<Car[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateCarInput: UpdateCarInput): Promise<Car> {
    const car: Car = new Car();
    car.name = updateCarInput.name;
    car.color = updateCarInput.color;
    car.model = updateCarInput.model;
    // car.id = id;
    return this.userRepository.save(car);
  }

  remove(id: number): Promise<{ affected?: number }> {
     return this.userRepository.delete(id);
  }

}
