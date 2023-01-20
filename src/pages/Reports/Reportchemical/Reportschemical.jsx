import React from "react";
import Piecharts from "../Piecharts/Piecharts";
import "./Reportchemical.css";

const Reportschemical = () => {
  return (
    <>
      <div className="Reportschemical_container">
        <h1>pie charts</h1>
        <div>
          <div className="piechart_container">
            <Piecharts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reportschemical;
