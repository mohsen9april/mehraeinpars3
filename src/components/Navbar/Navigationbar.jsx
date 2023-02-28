import React from "react";
import "./Navigationbar.css";
import { useState, useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

const flagsize = 35;

const Navigationbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [navSize, setnavSize] = useState("45px");
  const [navColor, setnavColor] = useState("transparent");
  const [navLinkColor, setnavLinkColor] = useState("#000000");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(204, 157, 105, 0.94)") : setnavColor("transparent");
    window.scrollY > 10 ? setnavLinkColor("#000000") : setnavLinkColor("#000000");
    window.scrollY > 10 ? setnavSize("5.5rem") : setnavSize("3rem");
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
            <div>
              <img src="./images/logo.png" alt="/" />
            </div>
            {/* <DarkModeIcon /> */}
            {/* <AccountCircleIcon /> */}
            {/* <EmailIcon /> */}
            {/* <PublicIcon /> */}

            <div className="languagebtn">
              <Flag
                style={{ width: "36px" }}
                country="GB"
                role="button"
                onClick={() => {
                  changeLanguage("en");
                }}
              />

              <Flag
                style={{ width: "36px" }}
                country="IR"
                role="button"
                onClick={() => {
                  changeLanguage("fa");
                }}
              />
              <Flag
                style={{ width: "36px" }}
                country="CN"
                role="button"
                size={flagsize}
                onClick={() => {
                  alert("coming soon!");
                }}
              />
            </div>
          </div>
          <div className="right_navbar">
            <h2> {t("name")} </h2>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigationbar;
