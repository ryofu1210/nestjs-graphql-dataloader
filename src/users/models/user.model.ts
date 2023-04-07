import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '@src/posts/models/post.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Post])
  posts: Post[];
}
