import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <footer>
          <div class="container">
            <div class="sec about">
              <h2>درباره ما</h2>
              <h3 className="footer_right_h3">
                شرکت کاغذسازی
                <span>
                  <strong> مهرآیین پارس </strong>
                </span>
              </h3>
              <br />
              <p>
                تولید کننده انواع کاغذ و مقوا و كاغذ كارتن،
                <br />
                كاغذ فلوتينگ ، تست لاینر کاغذ تست لاینر گراماژ 130 عرض 200-250 کاغذ تاپ فلوت گراماژ
                130 عرض 200-250
              </p>
              <br />

              <ul class="some socialMedia">
                <li>
                  <a href="/">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="sec quickLinks">
              <h2>پیوند ها </h2>
              <ul>
                <li>
                  <a href="/">صفحه اصلی</a>
                </li>
                <li>
                  <a href="/">چارت سازمانی</a>
                </li>
                <li>
                  <a href="/">محصولات</a>
                </li>
                <li>
                  <a href="/">خط جدید </a>
                </li>
                <li>
                  <a href="/">درباره ما</a>
                </li>
              </ul>
            </div>

            <div class="sec contact">
              <h2>اطلاعات تماس</h2>
              <ul class="info">
                <div class="footer-center">
                  <div>
                    <i class="fa fa-map-marker"></i>
                    <span>ایران</span>
                    <br />
                    <p>تهران کیلومتر ۲۰ جاده قدیم تهران قم روبروی مهدی آباد خیابان بعثت پلاک ۸</p>
                  </div>

                  <div>
                    <i class="fa fa-phone"></i>
                    <p>+۲۱ ۵۶۵۴ - ۶۶ ۲۰</p>
                  </div>
                  <div>
                    <i class="fa fa-envelope"></i>
                    <p>
                      <a href="/">Contact@mehraeinpars.com</a>
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </footer>
        <div class="copyrightText">
          <p>Copyright © 2022 Mehraeinpars. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
