import { NavLink, Outlet, useNavigate } from "react-router-dom";
const EditUserPage = () => {
  const users: number[] = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  return (
    <div>
      Edit user Page
      <button onClick={() => navigate("/home")}>home</button>
      {users.map((user) => (
        <NavLink
          to={`/collaborate/edit/${user}`}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Edit user {user}.{" "}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default EditUserPage;
