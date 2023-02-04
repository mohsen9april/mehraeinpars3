import React from "react";
import "./ContactusManager.css";

const ContactusManager = () => {
  return (
    <div>
      <div className="cd_Header">
        <img src="../images/Manager.jpg" alt="/" />
        <div class="centered">
          <h2>ارتباط با مدیریت مهرآیین پارس</h2>
        </div>
      </div>

      <div>
        <div class="container">
          <div class="wrapper">
            <div class="company-info">
              <h2>پیام مدیریت کاغذسازی مهرآیین پارس</h2>

              <p>
                شنیدن صدای گرم شما، نه تنها برای ما کسالت‌آور نیست، که نشان از توجه شما به ماست و ما
                آن را ارج می‌نهیم و همیشه به داشتن مشتریان چنین گرانمایه، سپاسگوی پیشگاه الهی
                بوده‌ایم. آنچه اینجا می‌نویسید، بی کم و کاست و مستقیما به دست مدیریت مجموعه می‌رسد و
                ما تمام تلاش خود را کرده‌ایم و می‌کنیم که گوشی شنوا و سینه‌ای فراخ برای شنیدن داشته
                باشیم و نه من تنها، که همه پرسنل مجموعه نیز، هم‌پیمان شده‌ایم که هر روز، خدمات خود
                را بهبود دهیم و حرف‌های شنیدنی شما را، بهترین منبع این آموختن می‌دانیم.
              </p>
            </div>

            <div class="contact_manager">
              <h3>تماس با ما</h3>

              <form id="contact-form">
                <p>
                  <label>نام</label>
                  <input type="text" name="name" id="name" required />
                </p>

                <p>
                  <label>نام خانوادگی</label>
                  <input type="text" name="company" id="company" />
                </p>

                <p>
                  <label>ایمیل</label>
                  <input type="email" name="email" id="email" required />
                </p>

                <p>
                  <label>شماره موبایل </label>
                  <input type="text" name="phone" id="phone" />
                </p>

                <p class="full">
                  <label>پیام</label>
                  <textarea name="message" rows="5" id="message"></textarea>
                </p>

                <p class="full">
                  <button type="submit">ارسال</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusManager;
