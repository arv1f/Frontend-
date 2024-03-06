import useContactsData from "../../hooks/useContactsData";
import { useState } from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  const { data, isLoading } = useContactsData();
  const [filterWord, setFilterWord] = useState<string>("");
  const DarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };
  const LightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  };
  const ToggleMode = (e) => {
    if (e.target.checked) {
      DarkMode();
    } else {
      LightMode();
    }
  };

  return (
    <div className="root-cont">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="left-panel">
          <label className="switch">
            <input
              type="checkbox"
              onChange={ToggleMode}
              className="switch__input"
            />
            <span className="switch__slider"></span>
          </label>
          <input
            className="search-input"
            placeholder="search"
            type="text"
            onChange={(e) => setFilterWord(e.target.value)}
          />
          {data
            ?.filter((el) =>
              filterWord === ""
                ? el
                : el.name.toLowerCase().includes(filterWord.toLowerCase()),
            )
            .map((contact, index) => (
              <Link
                className="contact-link"
                key={index}
                to={`/contact/${index}`}
              >
                <div className="avatar">
                  <img src={contact.avatarURL} />
                </div>
                {contact.name}
              </Link>
            ))}
        </div>
      )}
      <div className="right-panel"></div>
      <Outlet />
    </div>
  );
};
export default Root;
