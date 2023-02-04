import React from "react";
import "./Customers.css";

const Customers = () => {
  return (
    <div>
      <h1 className="Customer-header">برخی از مشتریان شرکت کاغذسازی مهرآیین پارس</h1>

      <div className="Customer-container">
        <img src="./images/customers/cartoniran.png" alt="" />
        <img src="./images/customers/caspian-logo.png" alt="" />
        <img src="./images/customers/cheetoz.png" alt="" />
        <img src="./images/customers/koshacarton.png" alt="" />
      </div>
    </div>
  );
};

export default Customers;
