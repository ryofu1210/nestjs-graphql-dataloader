import { Resolver, Query, Parent, ResolveField, Args } from '@nestjs/graphql';
import { Post } from '@src/posts/models/post.model';
// import { Author } from '@src/authors/models/author.model';
import { userLoader } from '@src/users/user.loader';

const postData = [
  { id: 1, content: 'Hello, world!', authorId: 1 },
  { id: 2, content: 'How are you?', authorId: 2 },
  { id: 3, content: 'Goodbye, world!', authorId: 3 },
];

@Resolver(() => Post)
export class PostsResolver {
  @Query(() => [Post], { name: 'getPosts' })
  async getPosts() {
    console.log('getPosts() called.');
    // ここで実際にデータベースから投稿データを取得する処理を実装します。
    // この例では、postDataから情報を取得しています。
    return postData;
  }

  @ResolveField('author')
  async author(@Parent() post: { authorId: number }) {
    // DataLoaderを使って投稿に紐づくユーザーを取得
    return await userLoader.load(post.authorId);
  }
}
