import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CommercialDepartment.css";

const CommercialDepartment = () => {
  // For AOS
  useEffect(() => {
    AOS.init({
      // delay: 200,
      // throttleDelay: 99,
    });
  }, []);
  return (
    <div>
      {/* <h2>Commercial-Department</h2> */}
      <div className="cd_Header">
        <img src="./images/Sale-Banner.jpg" alt="/" />
        <div class="centered">
          <h2>واحد بازرگانی کاغذسازی مهرآیین پارس</h2>
        </div>
      </div>
      <br />
      <div className="sale_section">
        <h2>واحد فروش (Sales unit)</h2>
        <br />
        <p>
          واحد فروش (Sales unit) با هدف ارائه محصولات و خدمات و در ارتباط مستقیم با مصرف‌کنندگان
          اقدام به فعالیت می‌کند. عرضه خدمات و فروش محصولات ما، همواره در گرو بررسی و کسب شناخت کافی
          از بازارهای هدف است. این شناخت در هر مرحله از کار سبب انجام تلاش‌های هدفدار و جهت‌دار برای
          تامین این نیازها می‌شود. به همین منظور بهره‌گیری از تیم فروش قوی و متخصص برای به حرکت
          درآوردن چرخه تولید و توزیع، از اقدامات لازم در این زمینه است.
        </p>
      </div>

      <br />
      <br />

      <section>
        <div className="sale_container">
          <div data-aos-duration="1000" data-aos="fade-up" className="sale_left">
            <img src="./images/sale2.jpg" alt="/" />
          </div>
          <div data-aos-duration="1000" data-aos="fade-left" className="sale_right">
            <h2>مهمترین فعالیت‌های تیم فروش ما</h2>
            <ul data-aos-duration="1800" data-aos="fade-left">
              <li>معرفی کامل و همه جانبه مشخصات دقیق محصولات</li>
              <li>شناخت نیازهای بازار و بررسی درخواست‌های سفارشی‌سازی مشتریان</li>
              <li>انجام فعالیت‌های صادراتی و بازرگانی </li>
              <li>ارائه هماهنگی‌های لازم با واحد بازاریابی</li>
              <li>بهینه‌سازی ارتباط با مشتری</li>
              <li>ارتباط مستقیم با واحد صادرات و پیگیری فرآیندهای آن</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section>
        <div className="sale_container">
          <div data-aos-duration="1000" data-aos="fade-left" className="sale_left">
            <img src="./images/sale1.jpg" alt="/" />
          </div>
          <div data-aos-duration="1000" data-aos="fade-right" className="sale_right">
            <h2>واحد‌های زیر مجموعه‌ واحد فروش شرکت</h2>
            <ul>
              <li>واحد بازاریابی</li>
              <li>واحد صادرات</li>
              <li>واحد ارتباط با مشتری</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialDepartment;
