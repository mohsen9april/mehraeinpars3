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

function App() {
  return (
    <>
      <Navigationbar />
      <br />
      <br />
      <br />

      <div className="App">
        <div className="Sidebarr">
          <Sidebar />
        </div>
        <div className="mainPages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports/products" element={<Reportsproduct />} />
            <Route path="/reports/chemicals" element={<Reportschemical />} />
            <Route path="/reports/store" element={<Reportstore />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Newline />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
