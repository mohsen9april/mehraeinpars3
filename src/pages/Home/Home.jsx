import React, { useEffect } from "react";
import CountupHome from "./CountupHome";
import ProductsHome from "./ProductsHome";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTranslation } from "react-i18next";

// const Heading = ({ subtitle, title }) => {
//   return (
//     <>
//       <div id="heading">
//         <h3>{subtitle} </h3>
//         <h1>{title} </h1>
//       </div>
//     </>
//   );
// };

const Home = () => {
  const { t } = useTranslation();

  const online = [
    // {
    //   cover: "./images/courses/online/o1.png",
    //   hoverCover: "./images/courses/online/o1.1.png",
    //   courseName: `${t("pulper")}`,
    //   course: "+۵",
    // },
    // {
    //   cover: "./images/courses/online/o2.png",
    //   hoverCover: "./images/courses/online/o2.1.png",
    //   courseName: "انبار آخال",
    //   course: "25 Courses",
    // },
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
    AOS.init({
      // delay: 200,
      // throttleDelay: 99,
    });
  }, []);

  return (
    <div className="home_container">
      <div className="home_title">
        {/* <h3>کاغذسازی مهرآیین پارس</h3> */}
        <h3> {t("name")} </h3>
      </div>

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/homeimg1.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3 data-aos-duration="1500" data-aos="fade-right" data-aos-once="false">
                {t("name")}
              </h3>
              {/* <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/homeimg2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>انبار صادرات</h5> */}
              {/* <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/homeimg3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>خط تولید</h5> */}
              {/* <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <div
        data-aos-duration="1000"
        data-aos="fade-up"
        // data-aos-offset="50"
        // data-aos-delay="30"
        // data-aos-duration="500"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
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

      <div
      // data-aos="fade-up"
      // data-aos-offset="100"
      // data-aos-delay="30"
      // data-aos-duration="500"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
      >
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
