import useContactsData from "../../hooks/useContactsData";
import { useState } from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  const { data, isLoading } = useContactsData();
  const [filterWord, setFilterWord] = useState<string>("");

  return (
    <div className="root-cont">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="left-panel">
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
      <Outlet />
    </div>
  );
};
export default Root;
