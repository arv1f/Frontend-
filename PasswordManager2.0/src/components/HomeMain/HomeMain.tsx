import "./HomeMain.css";
import { useMainStore } from "../../store";
import { UserContext } from "../../interface";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  value: string;
}
const HomeMain = ({ value }: Props) => {
  const [drawList, setDrawList] = useState<number>(0);
  const { users, deleteUser } = useMainStore<UserContext>((state) => state);
  const navigate = useNavigate();

  const usersList = users.filter((user) => user.name.includes(value));

  const heihgt: number = users.length;
  console.log(value);
  return (
    <>
      <div className="MainContainer" style={{ height: `${heihgt * 2}rem` }}>
        {usersList.map((num) => {
          return (
            <div
              key={num.id}
              className="MainChildren"
              style={{
                top: `${users.indexOf(num) * 2 + 2}rem`,
                position: "absolute",
                width: "40rem",
              }}
            >
              name: <b>{num.name}</b>, url: <b>{num.url}</b>, password:{" "}
              <b>{num.password}</b>.
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
                  setDrawList(drawList + 1);
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
        })}
      </div>
    </>
  );
};
export default HomeMain;
