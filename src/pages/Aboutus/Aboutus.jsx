import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus_container">
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="imgContainer">
            <div>
              <LazyLoadImage className="mainImg" src="./images/banner3.png" alt="Image Alt" />
            </div>
          </div>
          <div class="responsive-container-block textSide">
            <h2>درباره ما</h2>
            <p class="text-blk subHeading">
              در تاریخ شهریور ماه سال ۱۳۹۸ تاسیس و تحت شماره ۱۳۵۱ در اداره ثبت شرکت های استان تهران
              به ثبت رسیده است. این شرکت در راستای برنامه پنجم توسعه کشور با هدف تامین بخشی از نیاز
              داخلی صنعت کاغذ در ایران و کاهش وابستگی به تولیدات خارجی، با ظرفیت سالیانه 22 هزار تن
              انواع کاغذ و مقوا در تهران قرار گرفته است که به واسطه حضور کارشناسان با تجربه و در
              اختیار داشتن ماشین آلات روز دنیا و آزمایشگاه های پیشرفته، توانایی رقابت با کلیه کاغذ
              های داخلی و خارجی را دارا می باشد و تلاش متخصصان این مجموعه جهت دستیابی به تولید
              محصولات جدید و با کیفیت بالاتر همچنان ادامه دارد.
            </p>
            <a href="/" className="button_aboutus">
              <button class="explore">صفحه اصلی </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
