import React from "react";
import "./Aboutus.css";

const AddressMap = () => {
  return (
    <div className="google-map-code">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1681.4468894881884!2d51.33592102034048!3d35.48197532517943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sde!4v1675186156620!5m2!1sen!2sde"
        width="600"
        height="450"
        allowfullscreen=""
        className="aboutus_map"
        tabindex="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2036198683763!2d77.37576731744383!3d28.683554999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf07d26db9ccb%3A0xe68c67bf8a9e1201!2sASHOKA%20PAPER%20MILL!5e0!3m2!1sen!2sin!4v1615388020756!5m2!1sen!2sin"
        width="100%"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        className="aboutus_map"
        data-rocket-lazyload="fitvidscompatible"
        data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2036198683763!2d77.37576731744383!3d28.683554999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf07d26db9ccb%3A0xe68c67bf8a9e1201!2sASHOKA%20PAPER%20MILL!5e0!3m2!1sen!2sin!4v1615388020756!5m2!1sen!2sin"
        data-ll-status="loaded"
        class="entered lazyloaded"
      ></iframe>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div className="aboutus_container">
      <div className="aboutus_header"></div>
      <br />
      <br />
      <br />
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

      <br />
      <br />

      <div className="aboutus_map_container">
        <AddressMap />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Aboutus;
