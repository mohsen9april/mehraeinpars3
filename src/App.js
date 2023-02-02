import "./App.css";
import { Route, Routes } from "react-router-dom";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Newline from "./pages/Newline/Newline";
import Footer from "./components/Footer/Footer";
import Reportschemical from "./pages/Reports/Reportchemical/Reportschemical";
import Reportstore from "./pages/Reports/Reportstore/Reportstore";
import Reportsproduct from "./pages/Reports/Reportsproduct/Reportsproduct";
import Navigationbar from "./components/Navbar/Navigationbar";
import Aboutus from "./pages/Aboutus/Aboutus";
import QualityControl from "./pages/QualityControl/QualityControl";
import Products from "./pages/Products/Products";
import CommercialDepartment from "./pages/CommercialDepartment/CommercialDepartment";
import ContactusManager from "./pages/ContactUs/ContactusManager/ContactusManager";
import ContactusEmployment from "./pages/ContactUs/ContactusEmployment/ContactusEmployment";

function App() {
  return (
    <>
      <Navigationbar />
      <br />
      <br />
      <br />
      <hr />
      <div className="App">
        <div className="Sidebarr">
          <Sidebar />
        </div>

        <div className="mainpage_container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Commercial-Department" element={<CommercialDepartment />} />
            <Route path="/reports/products" element={<Reportsproduct />} />
            <Route path="/reports/chemicals" element={<Reportschemical />} />
            <Route path="/reports/store" element={<Reportstore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Newline />} />
            <Route path="/Qulitycontrol" element={<QualityControl />} />
            <Route path="/contactus/manager" element={<ContactusManager />} />
            <Route path="/contactus/employment" element={<ContactusEmployment />} />
            <Route path="/contactus/call" element={<ContactusManager />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
