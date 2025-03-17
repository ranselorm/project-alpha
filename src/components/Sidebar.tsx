import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { logout } from "@/store/userSlice";
import { useDispatch } from "react-redux";

const navLinks = [
  {
    title: "Overview",
    path: "/",
    icon: "material-symbols:dashboard-outline-rounded",
  },
  { title: "Users", path: "/users", icon: "mdi:users-outline" },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "grommet-icons:transaction",
  },
  { title: "Reports", path: "/reports", icon: "mage:chart-up" },
  { title: "Settings", path: "/settings", icon: "mdi:cog" },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-4">
      <div className="w-[130px] mb-6">
        <img src="/berth.png" alt="Logo" className="w-full" />
      </div>

      <nav className="flex flex-col space-y-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-150 rounded-md font-text ${
                isActive
                  ? "bg-main text-white"
                  : "hover:bg-gray-100 text-gray-600 hover:text-black"
              }`
            }
          >
            <Icon icon={link.icon} className="text-xl" />
            <span>{link.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div
        className="mt-auto px-4 py-2 rounded-md flex gap-x-3 text-gray-600 items-center border border-gray-400 cursor-pointer"
        onClick={handleLogout}
      >
        <Icon icon="material-symbols:logout" className="size-5" />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
