import React from "react";
import "./Navigationbar.css";
import { useState, useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

const Navigationbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  const [navSize, setnavSize] = useState("45px");
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
            <a>
              <img src="./images/logo.png" alt="/" />
            </a>
            {/* <DarkModeIcon /> */}
            {/* <AccountCircleIcon /> */}
            {/* <EmailIcon /> */}
            <PublicIcon />
            {/* Select box to change language */}
            <select
              className="custom-select"
              style={{ width: 200 }}
              onChange={changeLanguageHandler}
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
            </select>
            {/* call name of the variable from  the translation.json file to t() method */}
            {/* <h1>{t("name")}</h1> */}
          </div>
          <div className="right_navbar">
            <h2> {t("name")} </h2>
            {/* <img src="./images/logo.png" alt="/" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigationbar;
