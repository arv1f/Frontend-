import useContactsData from "../../hooks/useContactsData";
import { useState } from "react";
import "./Root.css";
import { Form, NavLink, Outlet } from "react-router-dom";

// export function action() {
//   const contact = createContact();
//   console.log(contact);
//   return { contact };
// }

const Root = () => {
  const { data, isLoading } = useContactsData();
  const [filterWord, setFilterWord] = useState<string>("");
  const DarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const LightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const theme = localStorage.getItem("selectedTheme");
  if (theme === "dark") {
    DarkMode();
  } else {
    LightMode();
  }
  const ToggleMode = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              defaultChecked={theme === "dark" ? true : false}
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
              <NavLink
                key={index}
                to={`/contact/${index}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "contact-link__active"
                    : isPending
                      ? "contact-link__pending"
                      : "contact-link"
                }
              >
                <div className="avatar">
                  <img src={contact.avatarURL} />
                </div>
                {contact.name}
              </NavLink>
            ))}
        </div>
      )}
      <div className="right-panel"></div>
      <Outlet />
    </div>
  );
};
export default Root;
