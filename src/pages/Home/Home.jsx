import React, { useEffect } from "react";
import CountupHome from "./CountupHome";
import ProductsHome from "./ProductsHome";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const { t } = useTranslation();

  const online = [
    {
      cover: "./images/courses/online/o3.png",
      hoverCover: "./images/courses/online/o3.1.png",
      courseName: `${t("qc")}`,
      course: "10 Courses",
    },
    {
      cover: "./images/courses/online/o4.png",
      hoverCover: "./images/courses/online/o4.1.png",
      courseName: `${t("teu")}`,
      course: "15 Courses",
    },
    {
      cover: "./images/courses/online/o5.png",
      hoverCover: "./images/courses/online/o5.1.png",
      courseName: `${t("etp")}`,
      course: "30 Courses",
    },
    {
      cover: "./images/courses/online/o6.png",
      hoverCover: "./images/courses/online/o6.1.png",
      courseName: `${t("pl")}`,
      course: "60 Courses",
    },
    {
      cover: "./images/courses/online/o7.png",
      hoverCover: "./images/courses/online/o7.1.png",
      courseName: `${t("warehouse")}`,
      course: "10 Courses",
    },
    {
      cover: "./images/courses/online/o8.png",
      hoverCover: "./images/courses/online/o8.1.png",
      courseName: `${t("businessunit")}`,
      course: "30 Courses",
    },
    {
      cover: "./images/courses/online/o9.png",
      hoverCover: "./images/courses/online/o9.1.png",
      courseName: `${t("ppu")}`,
      course: "80 Courses",
    },
    {
      cover: "./images/courses/online/o10.png",
      hoverCover: "./images/courses/online/o10.1.png",
      courseName: `${t("financialunit")}`,
      course: "120 Courses",
    },
  ];

  // For AOS
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="home_container">
      <div className="home_title">
        <h3 style={{ fontSize: "3.5vw", fontWeight: "bold" }}> {t("name")} </h3>
      </div>

      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="./images/homeimg1.png" alt="First slide" />
          <Carousel.Caption>
            <h3
              style={{ fontSize: "2.5vw", fontWeight: "bold" }}
              data-aos-duration="1500"
              data-aos="fade-right"
              data-aos-once="false"
            >
              {t("name")}
            </h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="./images/homeimg2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3 data-aos-duration="1500" data-aos="fade-right" data-aos-once="false">
              {t("name")}
            </h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="./images/homeimg3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 data-aos-duration="1500" data-aos="fade-right" data-aos-once="false">
              {t("name")}
            </h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />
      <div data-aos-duration="1000" data-aos="fade-up">
        <CountupHome />
      </div>
      <br />

      <div data-aos-duration="1000" data-aos="fade-right">
        <ProductsHome />
      </div>

      <br />
      <br />

      <div data-aos-duration="1000" data-aos="slide-up" className="home_ourway">
        <h2> {t("ourresponsibility")}</h2>
        <img src="./images/ourway.png" alt="/" />
      </div>

      <br />
      <br />

      <div>
        <section data-aos="zoom-in-down" data-aos-duration="1000" className="online">
          <div className="container">
            {/* <Heading subtitle="WORK SHOP " title="" /> */}
            <div className="online_header">
              <h2> {t("ourdepartments")} </h2>
            </div>
            <div className="content grid3">
              {online.map((val) => (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="/" />
                    <img src={val.hoverCover} alt="/" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  {/* <span>{val.course}</span> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <br />
      <br />

      <div data-aos="zoom-in-down" data-aos-duration="1000">
        <img
          style={{ display: "flex", margin: "auto", width: "80%" }}
          src="./images/home1.png"
          alt="/"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
