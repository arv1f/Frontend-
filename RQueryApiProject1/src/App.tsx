import "./App.css";
import { GetData } from "./interface.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TodoService from "./services/Todo.service.tsx";
import { useTodos } from "./hooks/useTodos.tsx";
import { SyntheticEvent, useState } from "react";
// const POST = () => {
//   const { isPending, error, data } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       axios
//         .post(`http://localhost:8080/${data.id}`, {
//           id: 10,
//         })
//         .then((res) => res.data),
//   });
//   isPending ? <p>Loading...</p> : <p>{data.id}</p>;
// }

const App = () => {
  // const { isLoading, /*error,*/ data } = useQuery({
  //   queryKey: ["todos", 1],
  //   queryFn: () => TodoService.getAll(),
  //   select: ({ data }) => data,
  //   enabled: true, //Сюда можно поставить пекременнуюю  в зависимости от которой мы будем решать делать ли запрос
  //   retry: 3, //Кол-во попыток запроса
  // });
  const [data1, setData1] = useState<GetData[]>([]);
  const [indexList, setIndexList] = useState<number[]>([]);
  const { isLoading, data, refetch } = useTodos(Number(-1));
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["create todo"],
    mutationFn: (title: string) => TodoService.create(title),
    onSuccess() {
      //async onSuccess() {
      setTitle("");
      alert("Todo created");
      //await refetch();
    },
  });

  const [title, setTitle] = useState("");

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    mutate(title);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div>
        <form onSubmit={submitHandler}>
          <input
            style={{
              padding: "0.7rem 0.7rem", //"10px 10px", //
              borderRadius: "0.4rem",
              marginRight: "0.7rem",
            }}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter todo title"
          />
          <button onClick={() => {}}>Add</button>
        </form>
      </div>
      <ul>
        <li>
          <div>
            <button
              onClick={() => {
                setData1((set) => [...set, data]);
                queryClient.invalidateQueries(["todos"]); //, data1.length + 1]); //refetch();
              }}
              style={{
                position: "absolute",
                top: "10%",
                left: "75%",
                transform: "translate(-100%, -30%)",
              }}
            >
              {data1.length === 0 && data !== undefined ? (
                <>{data.length}</>
              ) : (
                <>{data1.length}</>
              )}
            </button>
            {/*error && <p>An error has occurred: {error.message}</p>*/}
            {isLoading ? (
              <p>Loading...</p>
            ) : data ? (
              <ul>
                {data.map((element: GetData, index: number) => {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => {
                          console.log(index);
                          if (index in indexList) {
                            setIndexList((set) =>
                              set.filter((_, index2) => index2 !== index),
                            ); //users.filter((_, index) => index !== userId)
                          } else {
                            setIndexList((set) => [...set, index]);
                          }
                        }}
                      >
                        Показать {element.id}
                      </button>
                      {index in indexList && (
                        <>
                          <li>index: {index}</li>
                          <li>id: {element.id}</li>
                          <li>userId: {element.userId}</li>
                          <li>title: {element.title}</li>
                          <li>completed: {element.completed}</li>
                        </>
                      )}
                    </div>
                  );
                })}
              </ul>
            ) : (
              <h2>Data not found</h2>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default App;
// const result = await axios.post(url, {
//   "httpMethod": "GET",
//   "queryStringParameters": {
//       "TableName": "Users"
//   }
// });
// try {
//   console.log(result)
//   setData(result.data);
// } catch (e) {
//  console.log(e)
// }
