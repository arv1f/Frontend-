import { useNavigate } from "react-router-dom";
import { create } from "zustand";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import "../pagesCss/LoginPage.css";

const schema = z.object({
  name: z.string().min(2),
  password: z.string().min(8),
});
interface User extends z.infer<typeof schema> {}

interface UserName {
  userName: string;
  updateUserName: (newName: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserNameStore = create<UserName>((set) => ({
  userName: "",
  updateUserName: (newName: string) => set({ userName: newName }),
}));

const LoginPage = () => {
  const { updateUserName } = useUserNameStore((state) => state);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: {
      name: "it's me",
      password: "1234",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!data.name || !data.password) {
      alert("All fields are required");
    } else {
      updateUserName(data.name);
      navigate("/home");
    }
  };

  return (
    <div className="CentrContainer">
      <form className="LoginPage" onSubmit={handleSubmit(onSubmit)}>
        <h3>Login Page</h3>
        <input
          {...register("name")}
          className="LoginInput"
          type="text"
          placeholder="Username"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <input
          {...register("password")}
          className="LoginInput"
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <div></div>
        <button disabled={isSubmitting} type="submit" className="LoginButton">
          {isSubmitting ? "Loading..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
