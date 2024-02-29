export interface User {
  id: number;
  ind: string;
}
export interface UserList {
  users: User[];
  fetchGetUser: () => void;
  fetchPostUser: (dataNumber: number) => void;
}
export interface GetData {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
export interface ICreateUser extends Omit<GetData, "id"> {}
