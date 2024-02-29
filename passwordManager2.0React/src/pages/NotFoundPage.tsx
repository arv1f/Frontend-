import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <Link to={"/home"} style={{ fontSize: "3rem" }}>
        CLICK ON ME TO COME BACK.
      </Link>
      <div>404 Incorrect address entered. Try it: .../home, .../login</div>
      <img
        src="https://i.ytimg.com/vi/xof8yjqMd6A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gWygnMA8=&rs=AOn4CLCJB5qRR3qGsFjCHZJq4yzdgDFypw"
        alt="тут шрек на всю паге. ТЫ ОБЯЗАН ЕГО УВИДЕТЬ ЖДИ ЗАГРУЗКИ"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default NotFoundPage;
