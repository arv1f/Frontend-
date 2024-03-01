import "./HomeMain.css";
import { useMainStore } from "../../store";
import { UserContext } from "../../interface";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  value: string;
  urlOrName: boolean;
}
const HomeMain = ({ value, urlOrName }: Props) => {
  //const [drawList, setDrawList] = useState<number>(0);
  const { users, deleteUser } = useMainStore<UserContext>((state) => state);
  const navigate = useNavigate();
  let usersList = [];
  if (urlOrName) {
    usersList = users.filter((user) => user.url.includes(value));
  } else {
    usersList = users.filter((user) => user.name.includes(value));
  }
  const heihgt: number = users.length;
  return (
    <>
      <div className="MainContainer" style={{ height: `${heihgt * 2}rem` }}>
        {usersList.map((num) => {
          let marginRem: number = users.indexOf(num);
          // if (num.name.length + num.url.length + num.password.length > 43) {
          //   marginRem = marginRem * 3.3 + 2;
          // } else {
          //   console.log(num);
          //   marginRem = marginRem * 2 + 2;
          // }
          marginRem = marginRem * 3.3 + 2;
          return (
            <div
              key={num.id}
              className="MainChildren"
              style={{
                top: `${marginRem}rem`,
                position: "absolute",
                width: "40rem",
              }}
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
                  //setDrawList(drawList + 1);
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
