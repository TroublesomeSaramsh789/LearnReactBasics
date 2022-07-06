import React from "react";
import "./MainNav.scss";
import logoImage from "../../assets/logo.png";
import { BiWalk } from "react-icons/bi";
import { AiOutlineMobile, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
export default function MainNav() {
  const AuthData = React.useContext(AuthContext);
  return (
    <div className="mainNav shadow-md">
      <NavLink to="/">
        <div className="nav-logo">
          <img src={logoImage} alt="logo" title="logo" />
        </div>
      </NavLink>
      <div className="firstHalf">
        <NavLink to="/">Home</NavLink>
        <div className="trekTopicMain">
          <span className="trekTopic">Trek</span>
          <div className="trekBlock">
            <NavLink to="/best-selling-vt">
              <AiOutlineMobile className="inline-block" /> Virtual Trek
            </NavLink>
            <NavLink to="/best-selling-nt">
              <BiWalk className="inline-block"></BiWalk> Normal Trek
            </NavLink>
          </div>
        </div>

        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/guide-listing">Guides</NavLink>
      </div>

      {!AuthData.userType ? (
        <div className="secondHalf ">
          <div className="group relative ">
            <span>
              <AiOutlineUser className="inline-block mb-1" />
              User
            </span>
            <div className="hidden group-hover:flex flex-col absolute  h-32 w-64 rounded-lg z-20 bg-white px-6 pr-6 userLinks">
              <NavLink to="/becomeGuide">Become a guide</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          </div>
        </div>
      ) : null }

      {AuthData.userType &&
        (AuthData.userType === "User" ? (
          <NavLink to="userdashboard">
            {(AuthData.userName && AuthData?.userName.split(" ")[0]) || "Dashboard"}
          </NavLink>
        ) : (
          <NavLink to="dashboard">
            {(AuthData?.userName && AuthData?.userName.split(" ")[0]) ||
              "Dashboard"}
          </NavLink>
        ))}
    </div>
  );
}
