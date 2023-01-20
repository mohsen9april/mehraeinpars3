import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "../Sidebar/SidebarMenu";
import "./Sidebar.css";

const routes = [
  {
    path: "/",
    name: "صفحه اصلی",
    icon: <FaHome />,
  },
  {
    path: "/reports",
    name: "گزارشات",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/reports/products",
        name: "  تولید",
        icon: <FaUser />,
      },
      {
        path: "/reports/chemicals",
        name: "مصرف مواد شیمیایی ",
        icon: <FaLock />,
      },
      {
        path: "/reports/store",
        name: "موجودی انبار ",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/products",
    name: "محصولات",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/products/testliner",
        name: "تست لاینر  ",
        icon: <FaUser />,
      },
      {
        path: "/products/fluting",
        name: "فلوتینگ ",
        icon: <FaLock />,
      },
      {
        path: "/products/liner",
        name: "لاینر ",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Commercial-Department",
    name: "واحد بازرگانی",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/Commercial-Department/Sales",
        name: "فروش محصولات ",
        icon: <FaUser />,
      },
      {
        path: "/Commercial-Department/Buy",
        name: "تامین آخال",
        icon: <FaLock />,
      },
      {
        path: "/Commercial-Department/supply",
        name: "تامین تجهیزات",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Qulitycontrol",
    name: "واحد کنترل کیفیت",
    icon: <BsCartCheck />,
  },
  {
    path: "/messages",
    name: "گالری",
    icon: <MdMessage />,
  },

  {
    path: "/analytics",
    name: "خط جدید",
    icon: <BiAnalyse />,
  },

  {
    path: "/settings",
    name: "تماس با ما",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "ارتباط با مدیریت  ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "فرم استخدام",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "اطلاعات تماس",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "درباره ما",
    icon: <AiFillHeart />,
  },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink to={route.path} key={index} className="link" activeClassName="active">
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      </div>
    </>
  );
};
export default Sidebar;
