import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateCarInput {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @MinLength(2, { message: 'Color must have at least 2 characters.' })
  @IsNotEmpty()
  @Field()
  color: string;

  @IsString()
  @MinLength(2, { message: 'Model must have at least 2 characters.' })
  @IsNotEmpty()
  @Field()
  model: string;
}