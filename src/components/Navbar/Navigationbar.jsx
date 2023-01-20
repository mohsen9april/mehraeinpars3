import React from "react";
import "./Navigationbar.css";
import { useState, useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

const Navigationbar = () => {
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navLinkColor, setnavLinkColor] = useState("#000000");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavLinkColor("#ffffff") : setnavLinkColor("#000000");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          color: navLinkColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className="navbar_container">
          <div className="left_navbar">
            <AccountCircleIcon />
            <EmailIcon />
            <PublicIcon />
          </div>
          <div>
            <DarkModeIcon />
          </div>
          <div className="right_navbar">
            <h2>کاغذ سازی مهر آیین پارس</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigationbar;
