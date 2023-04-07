import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '@src/users/models/user.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => User)
  author: User;
}
