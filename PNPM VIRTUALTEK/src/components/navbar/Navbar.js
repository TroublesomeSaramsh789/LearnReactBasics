import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { Button } from "antd";
import MENU_PATH from "../../assets/menu_path.svg";

import "./navbar.scss";
import { AuthContext } from "./../../context/AuthContext";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [trekMenuOpen, setTrekMenuOpen] = useState(false);
  const AuthData = React.useContext(AuthContext);
  const toggleTrek = () => {
    setTrekMenuOpen(!trekMenuOpen);
  };
  return (
    <div className="sideMenuRight">
      <div
        onClick={() => setIsNavOpen(false)}
        className="fixed z-[999] inset-0 bg-[#00000099] transition-all duration-500 shadow-xl"
        style={{
          opacity: isNavOpen ? "1" : "0",
          visibility: isNavOpen ? "visible" : "hidden",
        }}
      />
      {/* Menu */}
      <div
        className="fixed z-[999] top-0 right-0 bottom-0 bg-white transition-all duration-500"
        style={{
          width: isNavOpen ? "min(20rem, 80%)" : "0",
        }}
      >
        <div className="p-4 h-full menuListWrap">
          {!AuthData.userType ? (
            <div className="loginSignup flex justify-between">
              <Button className="b-[#0A97D9]">
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button>
                <NavLink to="/signup">Signup</NavLink>
              </Button>
            </div>
          ) : null}
          <ul className="menuListSide mt-10">
            <li>
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <div
                onClick={() => {
                  toggleTrek();
                }}
              >
                <div className="trekDropWrap group ">
                  <span className="flex justify-between w-full">
                    <span>Trek</span>{" "}
                    {trekMenuOpen ? (
                      <AiOutlineDown className="inline-block" />
                    ) : (
                      <AiOutlineRight className="inline-block" />
                    )}
                  </span>

                  <div className="trekDropMain ml-6">
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        trekMenuOpen ? "h-[6rem]" : "h-0"
                      }`}
                    >
                      <li>
                        <NavLink activeclassname="active" to="/best-selling-vt">
                          Virtual Trek
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeclassname="active" to="/best-selling-nt">
                          Normal Trek
                        </NavLink>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/about-us" activeclassname="active">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink activeclassname="active" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/guide-listing">
                Guides
              </NavLink>
            </li>
          </ul>
          <div className="menuListSide menuListBottom absolute bottom-0">
            <ul>
              <li>
                <NavLink activeclassname="active" to="/becomeGuide">
                  Become a guide
                </NavLink>
              </li>
              <li>
                {AuthData.userType &&
                  (AuthData.userType === "User" ? (
                    <NavLink to="userdashboard">
                      {(AuthData.userName &&
                        AuthData?.userName.split(" ")[0]) ||
                        "Dashboard"}
                    </NavLink>
                  ) : (
                    <NavLink to="dashboard">
                      {(AuthData?.userName &&
                        AuthData?.userName.split(" ")[0]) ||
                        "Dashboard"}
                    </NavLink>
                  ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="h-36 w-7 fixed z-[999] top-1/2 -translate-y-1/2 right-0 text-[#0D64A2] flex justify-center items-center"
        style={{
          backgroundImage: `url("${MENU_PATH}")`,
          backgroundSize: "100% 100%",
        }}
      >
        <button className="shadow-xl" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <HiOutlineX size={18} /> : <HiMenu size={18} />}
        </button>
      </div>
    </div>
  );
}
