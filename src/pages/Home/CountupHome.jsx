import React from "react";
import CountUp from "react-countup";
import "./CountupHome.css";

const CountupHome = () => {
  return (
    <div className="ProductsCountUp">
      <di className="CountUpBox">
        <img src="./images/products.png" alt="/" />
        <h2> تنوع محصولات</h2>
        <CountUp
          start={0}
          end={12}
          duration={2.1}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
      <di className="CountUpBox">
        <img src="./images/employees.png" alt="/" />
        <h2> پرسنل </h2>
        <CountUp
          start={0}
          end={186}
          duration={2.4}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
      <di className="CountUpBox">
        <img src="./images/package.png" alt="/" />
        <h2> ظرفیت تولید سالیانه </h2>
        <CountUp
          start={0}
          end={22000000}
          duration={3}
          separator=","
          decimals={""}
          decimal="."
          prefix="+ "
          suffix=""
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
          enableScrollSpy
          style={{ fontSize: "23px", fontWeight: "bold" }}
        />
      </di>
    </div>
  );
};

export default CountupHome;
