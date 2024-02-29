import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ position: "absolute", left: "50%", top: "50%", width: "5rem" }}
    >
      <button onClick={() => navigate("/login")}>CLICK ME</button>
    </div>
  );
};

export { App };
