import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/": "Dashboard",
    "/settings": "Settings",
  };

  const currentTitle = pageTitles[location.pathname] || "Page";

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      <div
        className={`flex flex-col h-screen overflow-hidden transition-all ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-20"
        } w-full`}
      >
        {/* Navbar - Inside the main content only */}
        <div className="bg-white z-10">
          <Navbar
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            title={currentTitle}
          />
        </div>

        {/* Content - Only this section should scroll */}
        <main className="p-4 overflow-y-auto flex-1">
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
