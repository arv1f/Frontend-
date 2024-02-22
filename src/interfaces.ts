export interface User {
  name: string;
  password: string;
  url: string;
}
export interface UsersContextType {
  users: User[];
  addUser: (payload: User) => void;
  deleteUser: (userId: number) => void;
  editUser: (
    id: number,
    newName: string,
    newPassword: string,
    url: string,
  ) => void;
}
