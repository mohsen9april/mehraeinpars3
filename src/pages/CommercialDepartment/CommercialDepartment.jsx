import React from "react";

const CommercialDepartment = () => {
  return (
    <div>
      <h2>Commercial-Department</h2>
      <img
        style={{ display: "flex", margin: "auto", width: "70rem" }}
        src="./images/Sale-Banner.jpg"
        alt="/"
      />
      <div>
        <h2>واحد فروش (Sales unit)</h2>
        <p>
          واحد فروش (Sales unit) با هدف ارائه محصولات و خدمات و در ارتباط مستقیم با مصرف‌کنندگان
          اقدام به فعالیت می‌کند. عرضه خدمات و فروش محصولات ما، همواره در گرو بررسی و کسب شناخت کافی
          از بازارهای هدف است. این شناخت در هر مرحله از کار سبب انجام تلاش‌های هدفدار و جهت‌دار برای
          تامین این نیازها می‌شود. به همین منظور بهره‌گیری از تیم فروش قوی و متخصص برای به حرکت
          درآوردن چرخه تولید و توزیع، از اقدامات لازم در این زمینه است.
        </p>
      </div>

      <section>
        <div className="testline_container">
          <div className="testliner_left">
            <img src="./images/sale1.jpg" />
          </div>
          <div className="testliner_right">
            <h2>مهمترین فعالیت‌های تیم فروش ما</h2>
            <ul>
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
      <section>
        <div className="testline_container">
          <div className="testliner_left">
            <img src="./images/sale2.jpg" />
          </div>
          <div className="testliner_right">
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
