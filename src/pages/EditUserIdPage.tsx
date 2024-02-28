import { useNavigate, useParams } from "react-router-dom";
import "../pagesCss/EditUserIdPage.css";
import { useMainStore } from "../store";
import { UserContext } from "../interface";
const EditUserIdPage = () => {
  const { editUser, users } = useMainStore<UserContext>((state) => state);
  const parameters = useParams<{ userId: string }>();
  const navigate = useNavigate();
  console.log(users[Number(parameters.userId)].id);
  return (
    <div>
      Edit user Page with id {parameters.userId}
      <div className="o-hide">2</div>
      <div className="ContainerEdit">
        <div className="Edit">
          New name:
          <input type="text" placeholder="name" id="nameEdit" />
          New password:
          <input type="text" placeholder="password" id="passwordEdit" />
          New url:
          <input type="text" placeholder="url" id="urlEdit" />
          <div></div>
          <button
            onClick={() => {
              editUser(
                document.getElementById("nameEdit")?.value,
                document.getElementById("passwordEdit")?.value,
                document.getElementById("urlEdit")?.value,
                users[Number(parameters.userId)].id,
              );
              navigate("/home");
            }}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserIdPage;
