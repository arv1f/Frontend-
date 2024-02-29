import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "../pagesCss/EditUserIdPage.css";
import { useMainStore } from "../store";
import { UserContext } from "../interface";

const schema = z.object({
  name: z.string().min(2),
  password: z.string().min(8),
  url: z.string().url().min(4),
});
interface EditData extends z.infer<typeof schema> {}

const EditUserIdPage = () => {
  const { editUser, users } = useMainStore<UserContext>((state) => state);
  const parameters = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditData>({
    defaultValues: {
      name: "zxcSuperAiguli",
      password: "20042004",
      url: "https://nude-moon.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<EditData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!data.name || !data.password || !data.url) {
      alert("All fields are required");
    } else {
      editUser(
        data.name,
        data.password,
        data.url,
        users[Number(parameters.userId)].id,
      );
      navigate("/home");
    }
  };

  return (
    <div>
      <div className="o-hide">2</div>
      <div className="ContainerEdit">
        <form className="Edit" onSubmit={handleSubmit(onSubmit)}>
          New name:
          <input {...register("name")} type="text" placeholder="name" />
          {errors.name && <p>{errors.name.message}</p>}
          New password:
          <input {...register("password")} type="text" placeholder="password" />
          {errors.password && <p>{errors.password.message}</p>}
          New url:
          <input {...register("url")} type="text" placeholder="url" />
          {errors.url && <p>{errors.url.message}</p>}
          <div></div>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserIdPage;
