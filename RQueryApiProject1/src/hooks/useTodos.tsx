import { useQuery } from "@tanstack/react-query";
import TodoService from "../services/Todo.service.tsx";
export const useTodos = (id: number) => {
  if (id !== -1) {
    return useQuery({
      queryKey: ["todos", id],
      queryFn: () => TodoService.getById(String(id)),
      select: ({ data }) => data,
    });
  } else {
    return useQuery({
      queryKey: ["todosAll"],
      queryFn: () => TodoService.getAll(),
      select: ({ data }) => data,
      //enabled: !!id,
    });
  }
};
