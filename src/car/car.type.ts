import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('car')
export class carType{
    @Field (type => ID)
    id:string

    @Field()
    name:string

    @Field()
    color:string

    @Field()
    model:string


}