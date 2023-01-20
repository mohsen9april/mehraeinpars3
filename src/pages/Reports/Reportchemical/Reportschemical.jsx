import React from "react";
import Piecharts from "../Piecharts/Piecharts";
import "./Reportchemical.css";

const Reportschemical = () => {
  return (
    <>
      <h1>pie charts</h1>
      <div className="piechartschemical_container">
        <div className="piechart_container">
          <Piecharts />
        </div>
      </div>
    </>
  );
};

export default Reportschemical;
