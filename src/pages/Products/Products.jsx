import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Products.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  // For AOS
  useEffect(() => {
    AOS.init({
      // delay: 200,
      // throttleDelay: 99,
    });
  }, []);
  return (
    <div className="products_container">
      <div className="home_title">
        <h3>محصولات کاغذسازی مهرآیین پارس</h3>
      </div>
      <div className="video_products">
        <video loop autoPlay>
          <source src="./images/products.mp4" type="video/mp4" />
        </video>
      </div>
      {/* TestLiner */}
      <section>
        <h2 className="products_header">کاغذ تست‌لاینر</h2>
        <div className="testline_container">
          <div data-aos-duration="1000" data-aos="fade-up" className="testliner_left">
            <img src="./images/testliner.jpg" alt="/" />
          </div>
          <div data-aos-duration="1000" data-aos="fade-right" className="testliner_right">
            <p>
              کاغذ تست‌لاینر بصورت کامل از الیاف بازیافتی تولید می‌شود ولی در فرایند تولید آن از
              افزودنی‌هایی مثل نشاسته (بصورت آهار در یک طرف یا هر دو طرفِ کاغذ) و افزودنی‌های دیگری
              جهت پرکنندگی و همینطور رنگ نیز استفاده می‌گردد.
            </p>
            <br />
            <p>
              کاغذ تست‌لاینر در ساخت ورق کارتن مورد استفاده قرار می‌گیرد. در ساخت ورق کارتن، معمولا
              از 3 نوع کاغذ استفاده می‌شود. کاغذ تست لاینر برای لایه بیرونی، کاغذ فلوتینگ برای لایه
              میانی و کاغذ لاینر برای لایه داخلی.
            </p>
            <br />
            <p>
              کاغذ تست‌لاینری که به عنوان لایه رویی ورق کارتن مورد استفاده قرار می‌گیرد دارای مشخصات
              فنی ویژه‌ای است. جذب آب لایه رویی کاغذ کمتر از لایه زیری آن است. کم بودن جذب آب لایه
              رویی به دلیل محافظت کارتن از جذب رطوبت محیط و بالا رفتن میزان چاپ‌پذیری آن است و جذب
              آب لایه زیرین به دلیل چسبندگی بهتر روی کاغذ فلوتینگ است. همچنین کاغذ تست‌لاینر دارای
              مقاومت‌های سطحی مناسبی جهت چاپ‌پذیری با کیفیت بالا است. با توجه به کیفیت این کاغذ،
              قابلیت استفاده در هر دو وضعیت لایه بیرونی و لایه داخلی کارتن را دارد.
            </p>
            <br />
            <p>
              شرکت کاغذسازی مهرآیین پارس کاغذ تست‌لاینر را در گرماژ 100 تا 130 گرم و عرض 1.00 تا 2.4
              متر تولید می‌نماید.
            </p>
          </div>
        </div>
      </section>
      {/* Liner */}
      <section>
        <h2 className="products_header">کاغذ ‌لاینر</h2>
        <div className="testline_container">
          <div data-aos-duration="1000" data-aos="fade-left" className="testliner_right">
            <p>
              اگر کاغذی تولید کنیم که صد درصد آن از کاغذهای بازیافتی (آخال) تولیدشده باشد به آن کاغذ
              لاینر گفته می‌شود. کاغذ لاینر در بازار به نام‌های کاغذ قهوه‌ای، کاغذ ایرانی یا کاغذ
              شبه‌کرافت نیز شناخته می‌شود. این کاغذ در لایه‌ی رو یا داخل (بنا به کاربرد ورق کارتن
              ساخته شده در آینده) استفاده می‌شود.
            </p>
            <br />
            <p>
              در ساخت ورق کارتن، معمولا از 3 نوع کاغذ استفاده می‌شود. کاغذ تست‌لاینر برای لایه
              بیرونی، کاغذ فلوتینگ برای لایه میانی و کاغذ لاینر برای لایه داخلی.
            </p>
            <br />
            <p>
              استحکام این کاغذ نسبت به کاغذهای تست‌لاینر و فلوتینگ در حد متوسط است و از پرکاربردترین
              انواع کاغذ در صنعت کاغذ‌سازی است.
            </p>
            <br />
            <p>
              کاغذ لاینر با عرض 160 تا 240 سانتی‌متر با وزن 130 تا 200 گرم بر متر مربع در تولید
              انواع ورق کارتن سه لایه و ورق کارتن پنج لایه مورد استفاده قرار می‌گیرد.
            </p>
            <br />
            <p>
              شرکت کاغذسازی مهرآیین پارس با بکارگیری نیروهای متخصص و مجرب و داشتن امکانات آزمایشگاهی
              مدرن سعی در ارائه محصولاتی با کیفیت بالا و مطلوب به مصرف‌کنندگان را دارد.
            </p>
          </div>
          <div data-aos-duration="1000" data-aos="slide-up" className="testliner_left">
            <img src="./images/liner.jpg" alt="/" />
          </div>
        </div>
      </section>
      {/* Fluting */}
      <section>
        <h2 className="products_header"> {t("fluting")}</h2>
        <div className="testline_container">
          <div data-aos-duration="1000" data-aos="slide-up" className="testliner_left">
            <img src="./images/fluting.jpg" alt="/" />
          </div>
          <div data-aos-duration="1000" data-aos="fade-right" className="testliner_right">
            <p>
              کاغذ فلوتینگ یا کاغذ کنگره ای، به کاغذهایی ضخیم و موج دار گفته می شود که به عنوان لایه
              میانی در کارتن سازی مورد استفاده قرار میگیرد.وزن لایه میانی هر متر مربع از کاغذ
              فلوتینگ بین 80 تا 200 گرم است که بر اساس استانداردهای بین المللی، حداقل وزن استاندارد
              آن 80 گرم بر متر مربع تعیین شده است.
            </p>
            <br />
            <p>
              برای تولید کاغذ فلوتینگ از خمیر تهیه شده از کاغذ و مقوای بازیافتی (آخال) استفاده
              می‌کند؛ با این تفاوت که در تولید کاغذ فلوتینگ به خمیر آن نشاسته اضافه می‌گردد. وجود
              نشاسته در این کاغذ باعث می‌شود تا پس از آن که به ورق کارتن تبدیل شد و بیشتر رطوبت خود
              را از دست داد، با داشتن رطوبتی در حدود 7 درصد به کاغذی بسیار خشک و محکم تبدیل شود.
            </p>
            <br />
            <p>
              کاغذ فلوتینگ در تهیه ورق‌های کارتن جهت تأمین مقاومت آن به کار می‌رود. ورق کارتن معمولا
              در دو نوع سه لایه و پنج لایه تولید می‌شود. در تولید ورق سه لایه یک ورق کاغذ فلوتینگ در
              میان دو لایه کاغذ قرار می‌گیرد. اما در تولید ورق کارتن پنج لایه یک ورق کاغذ بازیافتی
              در میان دو ورق فلوتینگ قرار می‌گیرد و دو لایه کاغذ مرغوب‌تر در دو سوی آنها روکش
              می‌شود. معمولا برای روکش بیرونی از کاغذهای با کیفیت‌تر استفاده می‌شود تا شرایط چاپ
              مستقیم روی ورق کارتن فراهم گردد.
            </p>
            <br />
            <h2>مشخصات و ویژگی های کاغذ فلوتینگ</h2>
            <ul data-aos-duration="1600" data-aos="fade-left">
              <li>ضخامت زیاد</li>
              <li>مقاوم در برابر فشار و ضربه</li>
              <li>انعطاف پذیر</li>
              <li>کشش پذیری زیاد</li>
              <li>عاری از ریزه چوب ها و الیاف به هم چسبیده</li>
              <li>استحکام بالا </li>
              <li>وزن سبک</li>
              <li>قدرت جذب آب بیشتر از کاغذ تست لاینر</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Products;
