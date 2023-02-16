import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Aboutus.css";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t } = useTranslation();

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
            <h2> {t("aboutus")}</h2>
            <p class="text-blk subHeading">{t("aboutustext")}</p>
            {/* <a href="/" className="button_aboutus">
              <button class="explore">صفحه اصلی </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
