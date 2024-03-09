import { useQuery } from "@tanstack/react-query";
import { User } from "../interface";
const useContactsData = () => {
  return useQuery<User[]>({
    queryKey: ["contacts"],
    queryFn: async () =>
      await fetch("../public/data.json").then((res) =>
        res.json().then((data) => data.data),
      ),
  });
};
export default useContactsData;
