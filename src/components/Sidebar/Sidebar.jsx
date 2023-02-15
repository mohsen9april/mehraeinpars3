import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "../Sidebar/SidebarMenu";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InfoIcon from "@mui/icons-material/Info";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import "./Sidebar.css";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  const routes = [
    {
      path: "/",
      name: `${t("home")}`,
      icon: <DashboardIcon />,
    },
    {
      path: "/products",
      name: `${t("products")}`,
      icon: <ProductionQuantityLimitsIcon />,
      // subRoutes: [
      //   {
      //     path: "/products/testliner",
      //     name: "تست لاینر  ",
      //     icon: <FaUser />,
      //   },
      //   {
      //     path: "/products/fluting",
      //     name: "فلوتینگ ",
      //     icon: <FaLock />,
      //   },
      //   {
      //     path: "/products/liner",
      //     name: "لاینر ",
      //     icon: <FaMoneyBill />,
      //   },
      // ],
    },
    {
      path: "/Commercial-Department",
      name: `${t("commercial")}`,
      icon: <AttachMoneyIcon />,
      // subRoutes: [
      //   {
      //     path: "/Commercial-Department/Sales",
      //     name: "فروش محصولات ",
      //     icon: <FaUser />,
      //   },
      //   {
      //     path: "/Commercial-Department/Buy",
      //     name: "تامین آخال",
      //     icon: <FaLock />,
      //   },
      //   {
      //     path: "/Commercial-Department/supply",
      //     name: "تامین تجهیزات",
      //     icon: <FaMoneyBill />,
      //   },
      // ],
    },
    {
      path: "/Qulitycontrol",
      name: `${t("qc")}`,
      icon: <TroubleshootIcon />,
    },
    // {
    //   path: "/messages",
    //   name: "گالری",
    //   icon: <PhotoLibraryIcon />,
    // },

    {
      path: "/Newline",
      name: `${t("newline")}`,
      icon: <AccountTreeIcon />,
    },

    {
      path: "/contactus",
      name: `${t("contactus")}`,
      icon: <AddIcCallIcon />,
      exact: true,
      subRoutes: [
        {
          path: "/contactus/manager",
          name: `${t("manager")}`,
          icon: <FaUser />,
        },
        // {
        //   path: "/contactus/employment",
        //   name: "فرم استخدام",
        //   icon: <FaLock />,
        // },
        // {
        //   path: "/contactus/call",
        //   name: "اطلاعات تماس",
        //   icon: <FaMoneyBill />,
        // },
      ],
    },
    {
      path: "/Aboutus",
      name: `${t("aboutus")}`,
      icon: <InfoIcon />,
    },
  ];

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

  const handleMouseEnter = () => {
    toggle();
  };

  const handleMouseLeave = () => {
    toggle();
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="sidebar_container"
      >
        <motion.div
          animate={{
            width: isOpen ? "170px" : "52px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar_content"
        >
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
