import useContactsData from "../../hooks/useContactsData";
import { useState } from "react";
import "./Root.css";
import { NavLink, Outlet } from "react-router-dom";
import { useThemeStore } from "../../store";

// export async function action() {
//   const contact = await createContact();
//   return { contact }; }

const Root = () => {
  const { data, isLoading } = useContactsData();
  const [filterWord, setFilterWord] = useState<string>("");
  const { isThemeDark, toggleTheme } = useThemeStore();
  return (
    <div className={`root-cont ${isThemeDark ? "dark-theme" : "light-theme"}`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="left-panel">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => {
                toggleTheme();
              }}
              className="switch__input"
              defaultChecked={isThemeDark}
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
    // </div>
  );
};
export default Root;
