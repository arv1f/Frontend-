//import useContactsData from "../../hooks/useContactsData";
import { useState } from "react";
import "./Root.css";
import { User } from "../../interface";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getAllContacts } from "../../contacs";

export const loader = async () => {
  const contacts = await getAllContacts();
  return contacts;
};

const Root = () => {
  //const { data, isLoading } = useContactsData();
  const [filterWord, setFilterWord] = useState<string>("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await fetch("../../public/data.json").then((res) =>
  //       res.json(),
  //     );
  //     setData(data);
  //   };
  //   fetchData();
  // }, []);
  const data = useLoaderData() as User[];

  return (
    <div className="root-cont">
      {false ? (
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
                {contact.name} {contact.twitter}
              </Link>
            ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};
export default Root;
