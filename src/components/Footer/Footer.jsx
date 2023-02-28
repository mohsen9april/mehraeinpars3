import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_container">
      <div>
        <footer>
          <div class="footer_container">
            <div class="sec about">
              <h2>{t("aboutus")}</h2>
              <h3 className="footer_right_h3">{t("name")}</h3>
              <br />
              <p> {t("description")}</p>
              <br />

              <ul class="some socialMedia">
                <li>
                  <a
                    href="https://www.instagram.com/mehraeinpars/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  <a href="mailto:contact@mehraeinpars.com">
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div class="sec quickLinks">
              <h2>{t("links")} </h2>
              <ul>
                <li>
                  <Link to="/"> {t("home")}</Link>
                </li>
                <li>
                  <Link to="/products"> {t("products")}</Link>
                </li>
                <li>
                  <Link to="/Newline"> {t("newline")}</Link>
                </li>
                <li>
                  <Link to="/Aboutus"> {t("aboutus")}</Link>
                </li>
              </ul>
            </div>

            <div class="sec contact">
              <h2>{t("contactus")}</h2>
              <ul class="info">
                <div class="footer-center">
                  <div>
                    <i class="fa fa-map-marker"></i>
                    <span>{t("iran")}</span>
                    <br />
                    <p>{t("address")} </p>
                  </div>

                  <div>
                    <i class="fa fa-phone"></i>
                    <p>{t("phone")}</p>
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
