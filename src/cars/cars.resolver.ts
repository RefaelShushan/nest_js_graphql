import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './cars.model';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Mutation(() => Car)
  @UsePipes(new ValidationPipe())
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carsService.create(createCarInput);
  }

  @Query(() => [Car], { name: 'cars' })
  findAll() {
    return this.carsService.findAll();
  }
  
  @Query(() => String, { name: 'massi' })
  massi() {
    return "frghjk";
  }


  @Query(() => Car, { name: 'car' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.findOne(id);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carsService.update(updateCarInput.id, updateCarInput);
  }

  // @Mutation(() => Car)
  // removeCar(@Args('id', { type: () => Int }) id: number) {
  //   return this.carsService.remove(id);
  // }

  @Mutation(() => String)
  async removeCar(@Args('id', { type: () => Int }) id: number): Promise<string> {
    await this.carsService.remove(id);
    return `Car with ID ${id} has been deleted successfully.`;
  }
  
}
