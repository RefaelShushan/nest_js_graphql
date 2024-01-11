// import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class Car {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color:string

  @Column()
  model:string


}