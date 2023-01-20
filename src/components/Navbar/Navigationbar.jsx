import React from "react";
import "./Navigationbar.css";
import { useState, useEffect } from "react";

const Navigationbar = () => {
  const [navSize, setnavSize] = useState("10rem");
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
        <h2>کاغذ سازی مهر آیین پارس</h2>
      </nav>
    </div>
  );
};
export default Navigationbar;
