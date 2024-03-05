import axios from "axios";
import "./App.css";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTodos } from "./useServer";
import TodoServer from "./ApiServer";
// const TodoServer = new axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

function App() {
  const [Rest, setRest] = useState<string>("");
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => axios.get("https://localhost:8080").then((res) => res.data),
  //   select: (data) => data,
  //   enabled: Rest === "GET",
  // });
  const { isLoading, data, isError, error } = useTodos();
  console.log(data, isLoading, isError, error, "fdsvfer");
  const { mutate } = useMutation({
    mutationKey: ["POST"],
    mutationFn: (numberMy: number) => TodoServer.create(numberMy),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ numberMy: number }>({
    defaultValues: {
      numberMy: 0,
    },
  });
  const onSubmit: SubmitHandler<{ numberMy: number }> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!data.numberMy) {
      alert("Please enter a number");
      return;
    } else {
      mutate(data.numberMy);
    }
    // await axios
    //   .post("https://localhost:8080", data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gap: "2rem",
      }}
    >
      <button onClick={() => setRest("GET")}>GET</button>
      <button onClick={() => setRest("POST")}>POST</button>
      {Rest === "GET" && (
        <>
          <button type="submit">Submit</button>
          {isLoading ? <div>Loading...</div> : <div>{data?.numberMy}</div>}
          {isError && <div>{error.message}</div>}
        </>
      )}

      {Rest === "POST" && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("numberMy")} type="text" placeholder="number" />
            {errors.numberMy && <p>{errors.numberMy.message}</p>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
