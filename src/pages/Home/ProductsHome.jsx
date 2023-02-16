import React from "react";
import "./ProductsHome.css";
import { useTranslation } from "react-i18next";

const ProductsHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="products_home_container" id="speciality">
        <h1 class="heading_Products">{t("mehraeinParsproducts")}</h1>
        <div class="box-container">
          <div class="box">
            <img className="image" src="./images/fluting.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-1.png" alt="" /> */}
              <h3> {t("fluting")}</h3>
              <p>{t("flutingtext")}</p>
            </div>
          </div>

          <div class="box">
            <img className="image" src="./images/liner.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-2.png" alt="" /> */}
              <h3>{t("liner")} </h3>
              <p> {t("linertext")}</p>
            </div>
          </div>

          <div class="box">
            <img className="image" src="./images/testliner.jpg" alt="" />

            <div class="content">
              {/* <img src="images/s-3.png" alt="" /> */}
              <h3> {t("testliner")} </h3>
              <p> {t("testlinertext")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsHome;
