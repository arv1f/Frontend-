import { useQuery } from "@tanstack/react-query";

const useOneContactData = (contactId: number) => {
  return useQuery({
    queryKey: ["contact", contactId],
    queryFn: async () =>
      await fetch("../public/data.json")
        .then((res) => res.json())
        .then((data) => data.data[contactId]),
  });
};

export default useOneContactData;
