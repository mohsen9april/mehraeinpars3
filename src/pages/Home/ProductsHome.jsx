import React from "react";
import "./ProductsHome.css";

const ProductsHome = () => {
  return (
    <div>
      <section className="products_home_container" id="speciality">
        <h1 class="heading_Products">
          <span>محصولات</span> مهرآیین پارس
        </h1>
        <div class="box-container">
          <div class="box">
            <img className="image" src="./images/fluting.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-1.png" alt="" /> */}
              <h3> فلوتینگ</h3>
              <p>
                کاغذ فلوتینگ یا کاغذ کنگره ای، به کاغذهایی ضخیم و موج دار گفته می شود که به عنوان
                لایه میانی در کارتن سازی مورد استفاده قرار میگیرد. خمیر اولیه این کاغذ از ضایعات
                کشاورزی، الیاف غیرچوبی، خمیر چوب، کاغذهای باطله، بازیافتی و … به دست می آید. با خشک
                شدن این خمیر طی فرایندی خاص، کاغذ فلوتینگ به دست می آید.
              </p>
            </div>
          </div>

          <div class="box">
            <img className="image" src="./images/liner.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-2.png" alt="" /> */}
              <h3>لاینر </h3>
              <p>
                اگر کاغذی تولید کنیم که صد درصد آن از کاغذهای بازیافتی (آخال) تولیدشده باشد به آن
                کاغذ لاینر گفته می‌شود. کاغذ لاینر در بازار به نام‌های کاغذ قهوه‌ای، کاغذ ایرانی یا
                کاغذ شبه‌کرافت نیز شناخته می‌شود. این کاغذ در لایه‌ی رو یا داخل (بنا به کاربرد ورق
                کارتن ساخته شده در آینده) استفاده می‌شود.
              </p>
            </div>
          </div>

          <div class="box">
            <img className="image" src="./images/testliner.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-3.png" alt="" /> */}
              <h3>تست لاینر </h3>
              <p>
                کاغذ تست‌لاینر بصورت کامل از الیاف بازیافتی تولید می‌شود ولی در فرایند تولید آن از
                افزودنی‌هایی مثل نشاسته (بصورت آهار در یک طرف یا هر دو طرفِ کاغذ) و مواد سایزینگ
                (فقط در یک طرف کاغذ) و افزودنی‌های دیگری جهت پرکنندگی و همینطور رنگ نیز استفاده
                می‌گردد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsHome;
