import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMainStore } from "../store";
import { UserContext } from "../interface";
import "../pagesCss/AddUserPage.css";

const schema = z.object({
  name: z.string().min(2),
  password: z.string().min(8),
  url: z.string().url().min(4),
});
// interface FormData {
//   name: string;
//   password: string;
//   url: string;
// }
interface FormData extends z.infer<typeof schema> {}

const AddUserPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "YaderniyVova2005",
      password: "20052005",
      url: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!data.name || !data.password || !data.url) {
      alert("All fields are required");
    } else {
      addUser({
        name: data.name,
        password: (document.getElementById("password") as HTMLInputElement)
          .value,
        url: data.url,
        id: randomId(),
      });
      navigate("/home");
    }
  };

  const { addUser } = useMainStore<UserContext>((state) => state);
  const randomId = function (length = 6): string {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };
  let height: number = 25;
  if (errors.name) {
    height += 3.2;
  }
  if (errors.password) {
    height += 3.2;
  }
  if (errors.url) {
    height += 3.2;
  }
  return (
    <div className="AddCentrContainer">
      <div className="AddContainer" style={{ height: `${height}rem` }}>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            {...register("name")} //, {
            //   required: "Name is required",
            //   minLength: {
            //     value: 2,
            //     message: "Name length must be at least 2",
            //   },
            //})}
            className="AddInput"
            placeholder="name"
            type="text"
            id="name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
          <label htmlFor="password">Password:</label>
          <div className="input-wrapper">
            <input
              {...register("password")} //, {
              //   required: "Password is required",
              //   minLength: {
              //     value: 6,
              //     message: "Password length must be at least 6",
              //   },
              // })}
              className="AddInput"
              placeholder="password"
              type="text"
              id="password"
            />
            <button
              type="button"
              onClick={() =>
                ((
                  document.getElementById("password") as HTMLInputElement
                ).value = String(randomId(10)))
              }
              className="PasswordButton"
            >
              Random
            </button>
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          <label htmlFor="url">Url:</label>
          <input
            {...register("url")} //, {
            // required: "url is required",
            //   minLength: {
            //     value: 4,
            //     message: "Url length must be at least 4",
            //   },
            //   validate: (value) => {
            //     if (!value.includes("https://") && !value.includes("http://")) {
            //       return "Url must contain https:// or http://";
            //     }
            //     return true;
            //   },
            // })}
            className="AddInput"
            placeholder="url"
            type="text"
            id="url"
          />
          {errors.url && <p className="error">{errors.url.message}</p>}
          <button
            className="AddButton"
            disabled={isSubmitting}
            type="submit"
            style={{ marginTop: "1rem" }}
          >
            {isSubmitting ? "Loading..." : "JUST ADD IT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
