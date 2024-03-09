export interface User {
  id: string;
  name: string;
  password: string;
  url: string;
}
export interface UserContext {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
  editUser: (
    newName: string,
    newPassword: string,
    newUrl: string,
    id: string,
  ) => void; //(user: User) => void;
}
