import { getContact } from "../../contacs";
import { User } from "../../interface";
import "./ContactPage.css";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const contact = await getContact(Number(params.contactId) || 0);
  return contact;
};

const ContactPage = () => {
  const user = useLoaderData() as User;
  return (
    <div className="contact-cont">
      <div className="userdata__main">
        <div className="user__avatar">
          <img src={user.avatarURL} />
        </div>
        <div className="user__data">
          <h1>{user.name}</h1>
          <div>Twitter: {user.twitter}</div>
        </div>
      </div>
      <div className="userdata__bio">{user.bio}</div>
    </div>
  );
};
export default ContactPage;
