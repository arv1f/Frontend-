import { useNavigate } from "react-router-dom";
import "../pagesCss/HomePage.css";
import HomeMain from "../components/HomeMain/HomeMain";
import { useUserNameStore } from "./LoginPage";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const { userName } = useUserNameStore((state) => state);
  const [input, setInput] = useState<string>("");
  const [urlOrName, setUrlOrName] = useState<boolean>(false);

  const UrlOrName = () => {
    setUrlOrName(!urlOrName);
  };
  const SetInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <header className="Header">
        <h1 style={{ width: "100%", marginTop: "1rem", fontSize: "2.3rem" }}>
          YourOur password
        </h1>
        <form
          action=""
          className="HeaderForm"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={`searh by ${urlOrName ? "url" : "name"}`}
            className="HeaderInput"
            onChange={(event) => SetInput(event)}
          />
          <button className="HeaderButton" onClick={() => UrlOrName()}>
            {urlOrName ? "name" : "url"}
          </button>
        </form>
        <h3>{userName}</h3>
        <button onClick={() => navigate("/login")} className="HeaderButton">
          exit
        </button>
      </header>
      <main>
        <button className="Add" onClick={() => navigate("/add")}>
          Add user
        </button>
        <HomeMain value={input} urlOrName={urlOrName} />
      </main>
      <div className="o-hide">
        И нет сомнений, что сторонники тоталитаризма в науке ограничены
        исключительно образом мышления. Идейные соображения высшего порядка, а
        также выбранный нами инновационный путь напрямую зависит от форм
        воздействия.
      </div>
    </div>
  );
};

export default HomePage;
