import { useQuery } from "@tanstack/react-query";
import TodoService from "./ApiServer";
export const useTodos = () => {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: () => TodoService.get(),
    select: ({ data }) => data,
    //enabled: !!id,
  });
};
