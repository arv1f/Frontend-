  import { create } from "zustand";
  import { devtools, persist } from "zustand/middleware";
  import { immer } from "zustand/middleware/immer";
  import { UserList } from "../interface";

// const Example = (REST: string, dataNumber: number) => {
//   if (REST === "GET") {
//     const { isPending, error, data } = useQuery({
//       queryKey: ["repoData"],
//       queryFn: () =>
//         axios
//           .get("http://localhost:8080/") //"http://www.boredapi.com/api/activity?key=5881028")
//           .then((res) => res.data),
//     });
//     if (isPending) return "Loading...";
//     if (error) return "An error has occurred: " + error.message;
//     return data;
//   }

//   if (REST === "POST") {
//     const { isPending, error, data } = useQuery({
//       queryKey: ["repoData"],
//       queryFn: () =>
//         axios
//           .post("http://localhost:8080/", {
//             id: dataNumber,
//           })
//           .then((res) => res.data),
//     });
//     if (isPending) return "Loading...";
//     if (error) return "An error has occurred: " + error.message;
//     return data;
//   }
// };

// const userMyStore = create<UserList>()(
//   immer(
//     persist(
//       devtools((set) => ({
//         users: [],
//         fetchGetUser: async () => {
//           const data = await Example("GET", 0);
//           set({ users: data });
//           // const reponse = await fetch(endpoint);
//           // const userData = await reponse.json();
//           // set({ users: userData });
//         },
//         fetchPostUser: async (dataNumber) => {
//           // const reponse = await fetch("http://localhost:8080/", {
//           //   method: "POST",
//           //   headers: {
//           //     "Content-Type": "application/json",
//           //   },
//           //   body: JSON.stringify({
//           //     id: dataNumber,
//           //   })
//           //   }
//           // );
//           // const userData = await reponse.json();
//           const userData = await Example("POST", dataNumber);
//           set({ users: userData });
//         },
//       })),
//       { name: "usersStore", version: 1 },
//     ),
//   ),
// );
// export default userMyStore;
