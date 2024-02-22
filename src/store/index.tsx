import { create } from "zustand";
import { User, UsersContextType } from "../interfaces";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const userStore = create<UsersContextType>()(
  immer(
  persist(
    devtools((set) => ({
      users: [{name:"dsa", password:"fds", url:'rgfev'}],
      addUser: (payload: User) =>
        set((state) => ({ users: [...state.users, payload] })),
      deleteUser: (userId: number) =>
        set((state) => ({
          users: state.users.filter((_, index) => index !== userId),
        })),
      editUser: (
        id: number,
        newName: string,
        newPassword: string,
        url: string,
      ) => set((state) => ({ users: state.users.map((el, index) => id === index ? {...el, name:newName, password:newPassword, url:url}: el)}))
    })),
    { name: "usersStore", version: 1 },
  ), ),
);
export default userStore;