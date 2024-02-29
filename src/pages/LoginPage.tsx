import { useNavigate } from "react-router-dom";
import "../pagesCss/LoginPage.css";
import { create } from "zustand";
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
  return (
    <div className="CentrContainer">
      <div className="LoginPage">
        <h3>Login Page</h3>
        <input
          className="LoginInput"
          type="text"
          defaultValue={"vova"}
          placeholder="Username"
          id="nameLog"
        />
        <input
          className="LoginInput"
          type="text"
          defaultValue={1234}
          placeholder="Password"
          id="passwordLog"
        />
        <div></div>
        <button
          className="LoginButton"
          onClick={() => {
            navigate("/home");
            updateUserName(document.getElementById("nameLog")?.value);
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
