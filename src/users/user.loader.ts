const DataLoader = require('dataloader');

// 仮のユーザーデータ
const userData = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const batchGetUsers = async (userIds: number[]): Promise<any[]> => {
  console.log('batchGetUsers() called.', userIds);
  // ここで実際にデータベースからユーザー情報を取得する処理を実装します。
  // この例では、userDataから情報を取得しています。
  return userIds.map((userId) => userData.find((user) => user.id === userId));
};

export const userLoader = new DataLoader(batchGetUsers);
