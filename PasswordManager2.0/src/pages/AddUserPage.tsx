import { useNavigate } from "react-router-dom";
import { useMainStore } from "../store";
import { UserContext } from "../interface";
import "../pagesCss/AddUserPage.css";
const AddUserPage = () => {
  const navigate = useNavigate();

  const { addUser } = useMainStore<UserContext>((state) => state);

  const randomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  return (
    <div className="AddCentrContainer">
      <div className="AddContainer">
        <h2>Add User</h2>
        <label htmlFor="name">Name:</label>
        <input
          className="AddInput"
          defaultValue={"YaderniyVova2005"}
          placeholder="name"
          type="text"
          id="name"
        />
        <label htmlFor="name">Password:</label>
        <div className="input-wrapper">
          <input
            className="AddInput"
            defaultValue={"2005"}
            placeholder="password"
            type="text"
            id="password"
          />
          <button
            onClick={() => {
              document.getElementById("password").value = randomId(10);
            }}
            className="PasswordButton"
          >
            Random
          </button>
        </div>
        <label htmlFor="name">Url:</label>
        <input
          className="AddInput"
          defaultValue={"yandex.ru"}
          placeholder="url"
          type="text"
          id="url"
        />
        AddUserPage{" "}
        <button
          onClick={() => {
            navigate("/home");
            addUser({
              id: randomId(),
              name: document.getElementById("name")?.value,
              password: document.getElementById("password")?.value,
              url: document.getElementById("url")?.value,
            });
          }}
        >
          JUST ADD IT
        </button>
      </div>
    </div>
  );
};

export default AddUserPage;
