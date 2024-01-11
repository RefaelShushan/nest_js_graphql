import { Field, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class Car {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  model: string;
 
}