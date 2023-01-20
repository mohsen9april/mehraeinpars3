import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <h3>Navbar</h3>
      <div className="App">
        <div className="Sidebarr">
          <Sidebar />
        </div>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </div>
      <h3>Footer</h3>
    </>
  );
}

export default App;
