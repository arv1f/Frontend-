import useOneContactData from "../../hooks/useOneContactData";
import "./ContactPage.css";
import { Link, useParams } from "react-router-dom";

const ContactPage = () => {
  const { data, isLoading } = useOneContactData(
    Number(useParams().contactId) || 0,
  );
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="contact-cont">
          <div className="userdata__main">
            <div className="user__avatar">
              <img src={data.avatarURL} />
            </div>
            <div className="user__data">
              <h1>{data.name}</h1>
              <div>
                <Link to={""}>{data.twitter}</Link>
              </div>
              <div className="userdata__bio">{data.bio}</div>
              <div className="userdata__buttons">
                <button
                // onClick={() => {
                //   navigate("/contact/" + data.id + "/edit");
                // }}
                >
                  Edit
                </button>
                <button style={{ color: "red" }}>Delete</button>
                <Link className="close-btn" to={"/"}>
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ContactPage;
