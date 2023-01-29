import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountupHome from "./CountupHome";
import ProductsHome from "./ProductsHome";

export const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "دانش",
    desc: " texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "صلاحیت",
    desc: " texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "تخصص",
    desc: " texts.",
  },
];

export const online = [
  {
    cover: "./images/courses/online/o1.png",
    hoverCover: "./images/courses/online/o1.1.png",
    courseName: "خمیر سازی",
    course: "+۵",
  },
  {
    cover: "./images/courses/online/o2.png",
    hoverCover: "./images/courses/online/o2.1.png",
    courseName: "انبار آخال",
    course: "25 Courses",
  },
  {
    cover: "./images/courses/online/o3.png",
    hoverCover: "./images/courses/online/o3.1.png",
    courseName: "واحد کنترل کیفیت",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/o4.png",
    hoverCover: "./images/courses/online/o4.1.png",
    courseName: "واحد فنی و مهندسی",
    course: "15 Courses",
  },
  {
    cover: "./images/courses/online/o5.png",
    hoverCover: "./images/courses/online/o5.1.png",
    courseName: "تصفیه خانه",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/o6.png",
    hoverCover: "./images/courses/online/o6.1.png",
    courseName: "خط تولید",
    course: "60 Courses",
  },
  {
    cover: "./images/courses/online/o7.png",
    hoverCover: "./images/courses/online/o7.1.png",
    courseName: "انبار تجهیزات",
    course: "10 Courses",
  },
  {
    cover: "./images/courses/online/o8.png",
    hoverCover: "./images/courses/online/o8.1.png",
    courseName: "واحد بازرگانی",
    course: "30 Courses",
  },
  {
    cover: "./images/courses/online/o9.png",
    hoverCover: "./images/courses/online/o9.1.png",
    courseName: "واحد برنامه ریزی و تولید",
    course: "80 Courses",
  },
  {
    cover: "./images/courses/online/o10.png",
    hoverCover: "./images/courses/online/o10.1.png",
    courseName: "واحد عمران",
    course: "120 Courses",
  },
];

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="heading">
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  );
};
const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      throttleDelay: 99,
    });
  }, []);

  return (
    <div className="home_container">
      <div className="home_title">
        <h2>کاغذسازی مهرآیین پارس</h2>
      </div>
      <div className="video_top">
        <video loop autoPlay>
          <source src="./images/video.mp4" type="video/mp4" />
        </video>
      </div>

      <br />
      <br />

      <CountupHome />

      <br />
      <br />

      <div className="home_ourway">
        <h2>مسیر ما برای مسئولیت زیست محیطی</h2>
        <img src="./images/ourway.png" alt="/" />
      </div>

      <br />
      <br />

      <div>
        <ProductsHome />
      </div>

      {/* <section className="whychooseus">
        <div className="whychooseus_container">
          <div className="left_row">
            <div>
              <img src="./images/about.webp" alt="/" />
            </div>
          </div>
          <div className="right_row">
            <Heading subtitle="چرا ما را انتخاب کنید؟" title="" />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="/" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      <br />
      {/* <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <img style={{ display: "flex", margin: "auto" }} src="./images/image1.png" alt="/" />
      </div>
      <br></br> */}
      <br></br>

      {/* Workshop Section */}
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
        <section className="online">
          <div className="container">
            <Heading subtitle="WORK SHOP " title="" />
            <div className="content grid3">
              {online.map((val) => (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="/" />
                    <img src={val.hoverCover} alt="/" className="show" />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <br />
      <img style={{ display: "flex", margin: "auto" }} src="./images/aboutus1.png" alt="/" />
      <br />
      <br />
      <h1> Who We Are </h1>
      <img style={{ display: "flex", margin: "auto" }} src="./images/image2.png" alt="/" />
      <h1>why choose us</h1>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Whychooseus.png"
        alt="/"
      />
      <h1>about us </h1>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Aboutushome.png"
        alt="/"
      />
      <h1>workshop </h1>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Workshop.png"
        alt="/"
      />
    </div>
  );
};

export default Home;
