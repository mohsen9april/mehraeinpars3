import React from "react";
import Barcharts from "../Barcharts/Barcharts";
import LinechartsD from "../LinechartsD/LinechartsD";
import LinechartsM from "../LinechartsM/LinechartsM";
import Piechartstop from "../Piecharts/Piechartstop";
import ProductsCountUp from "../ProductsCountUp/ProductsCountUp";
import "./Reportproduct.css";

const Reportsproduct = () => {
  return (
    <div className="reportproduct_container">
      <h2 className="h2_reports">گزارش تولید</h2>
      <div className="top_section_reportproduct">
        <div className="left_reportsproduct">
          <LinechartsD />
        </div>
        <div className="right_reportsproduct">
          <LinechartsM />
        </div>
      </div>
      <br />
      <div className="counup_reportproduct">
        <ProductsCountUp />
      </div>
      <br />
      <Piechartstop />
      <br />
      <div className="Barchart_reportpage_section">
        <Barcharts />
      </div>
      <br />
    </div>
  );
};

export default Reportsproduct;
