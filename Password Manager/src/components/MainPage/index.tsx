import "./index.css";
import MyVeryButton from "../Button";
import userStore from "../../store";
import { useState } from "react";
import ButtonNumber from "../ButtonNumber";
import { User } from "../../interfaces";

interface Width {
  width: string;
}

interface Page {
  onClickChangePage: (newValue: string | null) => void;
  myName: string;
}
let width: Width;

const MainPage = ({ onClickChangePage, myName }: Page) => {
  const [buttonNumber, setButtonNumber] = useState<number | null>(null);
  const [myChange, setMyChange] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);

  const users = userStore((set) => set.users);
  const functSetButtonNumber = (type: number | null): void => {
    setButtonNumber(type);
    if (type === null) {
      width = { width: "1385px" };
    } else {
      width = { width: "2090px" };
    }
  };

  const newList: User[] = [];
    const ListWithValue = () => {
    users.forEach((element: User) => {
      for (let i:number = 0; i<myChange.length; i++)
      {
      if (search) {
        if (element.name.slice(i, myChange.length+i) === myChange) {
          newList.push(element);
        }
      } else {
        if (element.url.slice(i, myChange.length+i) === myChange) {
          newList.push(element);
        }
      }}
  });
  };
  if (myChange.length !== 0) {
    ListWithValue();
  }
  return (
    <div className="divBG">
      <header className="ContainerM">
        <h1>Password Manager</h1>
        <input
          id="3"
          defaultValue={myChange}
          onChange={(event) => setMyChange(event.target.value)}
          placeholder={search ? "nickname search" : "url search"}
          className="myInput"
          type="text"
        />
        <button
          style={{
            border: "solid 2.3px",
            width: "300px",
            height: "50px",
            marginTop: "25px",
            borderRadius: "10px",
          }}
          onClick={() => setSearch(!search)}
        >
          search by {search ? "url" : "nickname"}
        </button>
        <h2>{myName}</h2>
        <button className="myButton" onClick={() => onClickChangePage(null)}>
          Выйти
        </button>
      </header>
      <div className="das">
        <h1>Password Manager</h1>
        <form>
          Select a name:
          <input placeholder="VOVA" defaultValue={"vova"} type="text" />
        </form>
        <form>
          Select a password:
          <input
            defaultValue={"500000"}
            type="range"
            min="-10000000"
            max="10000000"
          />
        </form>
        <button className="welcome">COME IN</button>
      </div>
      <main style={width}>
        <div className="leftMainDiv">
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={0}
            inText="Добавить"
          ></MyVeryButton>
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={1}
            inText="Изменить"
          ></MyVeryButton>
          <MyVeryButton
            onClick={functSetButtonNumber}
            falseOrTrue={2}
            inText="Удалить"
          ></MyVeryButton>
        </div>
        <ButtonNumber
          newList={newList}
          buttonNumber={buttonNumber}
          closeButton={functSetButtonNumber}
        ></ButtonNumber>
      </main>
    </div>
  );
};
export default MainPage;
