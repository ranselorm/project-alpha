import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Always Visible on Larger Screens */}
      <div
        className={`lg:w-[270px] ${
          isSidebarOpen ? "w-64" : "w-0"
        } transition-all`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggle={() => setSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:w-9/12 w-full flex flex-col">
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
