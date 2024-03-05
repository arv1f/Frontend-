import { useNavigate } from "react-router-dom";
import { User, UserContext } from "../interface";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { useMainStore } from "../store";
import "./HomeMain/HomeMain.css";
import { Dispatch } from "react";
interface Props {
  num: User;
  marginRem: number;
  users: User[];
  setUsersList: Dispatch<React.SetStateAction<User[]>>;
}

const SortableUser = ({ num, marginRem, users, setUsersList }: Props) => {
  const { deleteUser } = useMainStore<UserContext>((state) => state);
  const navigate = useNavigate();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: num.id });
  if (users.indexOf(num) === -1) return null;
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    top: `${marginRem}rem`,
    width: "40rem",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={num.id}
      className="MainChildren"
    >
      <div style={{ display: "inline", paddingRight: "6.528rem" }}>
        name: <b>{num.name}</b>, url: <b>{num.url}</b>, password:{" "}
        <b>{num.password}</b>.
      </div>
      <button
        onClick={() => navigate(`/edit/${users.indexOf(num)}`)}
        className="ButtonDelete" //edit
        style={{
          height: "1.3rem",
          fontSize: "0.5rem",
          marginTop: "2px",
          position: "absolute",
          right: "5.6rem",
          paddingTop: 0,
        }}
      >
        edit
      </button>
      <button
        onClick={() => {
          deleteUser(num.id);
          setUsersList(users.filter((user) => user.id !== num.id));
        }}
        className="ButtonDelete"
        style={{
          height: "1.3rem",
          fontSize: "0.5rem",
          marginTop: "2px",
          position: "absolute",
          right: "1.6rem",
          paddingTop: 0,
        }}
      >
        delete
      </button>
    </div>
  );
};

export default SortableUser;
