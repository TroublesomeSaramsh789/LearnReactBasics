import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { getImageAbsoluteURL } from "../../../../utils/string";
import "./AboutTeamComponent.scss";

export default function AboutTeamComponent({
  userImage,
  className,
  phoneNumber,
  email,
  name,
  post,
  aboutPerson,
  flipImage = false,
}) {
  var styles = {};
  if (flipImage) {
    styles = { flexDirection: "row-reverse" };
  } else {
    styles = {};
  }
  return (
    <div
      className={
        "aboutTeamCompWrap row " + className + " shadow-sm px-2 py-3 my-4"
      }
      style={styles}
    >
      <div className="aboutTeamCImg col-md-3">
        <img
          className=""
          src={getImageAbsoluteURL(userImage)}
          alt="profile pic"
        ></img>
      </div>
      <div className="aboutText col-md-9">
        <h5 className="font-bold headerText">{name}</h5>
        <p className="font-semibold text-gray-800 italic">{post}</p>
        <p className="text-gray-800 text-ellipsis">{aboutPerson}</p>
        <div className="text-blue-600 row align-middle">
          <p className="aboutTeamPhoneNumber col-md-5 col-lg-4">
            <BsTelephoneFill className=" column align-middle inline-block" />
            &nbsp;{phoneNumber}
          </p>
          <p className="column align-middle col-md-7 col-lg-8">
            <AiOutlineMail className="inline-block" />
            &nbsp;{email}
          </p>
        </div>
      </div>
    </div>
  );
}
