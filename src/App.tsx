import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Transactions from "./pages/Transactions";
import AdminLogin from "./pages/AdminLogin"; // Import Login Page

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null); // Store authenticated user state
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/": "Overview",
    "/users": "Users",
    "/reports": "Reports",
    "/transactions": "Transactions",
    "/settings": "Settings",
  };

  const currentTitle = pageTitles[location.pathname] || "Page";

  // If no user is logged in, render the login page
  if (!user) {
    return <AdminLogin setUser={setUser} />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggle={() => setSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div
        className={`flex flex-col h-screen overflow-hidden transition-all ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-20"
        } w-full`}
      >
        {/* Navbar */}
        <div className="bg-white z-10">
          <Navbar
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            title={currentTitle}
          />
        </div>

        {/* Main Page Content */}
        <main className="overflow-y-auto flex-1 bg-[#f5f7fa]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
