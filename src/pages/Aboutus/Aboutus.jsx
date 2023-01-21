import React from "react";
import "./Aboutus";

const Aboutus = () => {
  return (
    <div className="aboutus_container">
      <div className="video_top_aboutus">
        <video loop autoPlay>
          <source src="./images/Wecreate.mp4" type="video/mp4" />
        </video>
      </div>
      <h1>figure </h1>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Aboutusone.png"
        alt="/"
      />
      <h1>where we are </h1>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Whereweare.png"
        alt="/"
      />
    </div>
  );
};

export default Aboutus;
