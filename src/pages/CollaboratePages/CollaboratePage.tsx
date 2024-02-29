import { useNavigate } from "react-router-dom";
const CollaboratePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      Collaborate Page <button onClick={() => navigate("/home")}>home</button>
    </div>
  );
};

export default CollaboratePage;
