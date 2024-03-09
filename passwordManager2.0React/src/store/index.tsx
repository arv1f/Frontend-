import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { User, UserContext } from "../interface";
export const useMainStore = create<UserContext>()(
  immer(
    devtools(
      persist(
        (set) => ({
          users: [],
          addUser: (user: User) => {
            set((state) => {
              state.users.push(user);
            });
          },
          deleteUser: (id: string) =>
            set((state) => {
              state.users = state.users.filter((user) => user.id !== id);
            }),
          editUser: (
            newName: string,
            newPassword: string,
            newUrl: string,
            id: string,
          ) =>
            set((state) => ({
              users: state.users.map((el) =>
                id === el.id
                  ? { ...el, name: newName, password: newPassword, url: newUrl }
                  : el,
              ),
            })),
        }),
        { name: "Users", version: 1 },
      ),
    ),
  ),
);
