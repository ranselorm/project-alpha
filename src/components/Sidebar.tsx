import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-white text-black transition-all border border-grey p-4 ${
        isOpen ? "w-64" : "w-0"
      } lg:w-64 flex flex-col`}
    >
      <div className="lg:hidden">
        <button onClick={toggle} className="text-white p-2">
          <Icon icon="hugeicons:menu-03" />
        </button>
      </div>
      <div className="w-[130px] mb-6">
        <img src="/berth.png" alt="" className="w-full" />
      </div>
      <nav className="flex flex-col space-y-4 py-4 px-2">
        <NavLink
          to="/"
          //   className="flex items-center space-x-2 p-2 hover:bg-teal-500 hover:text-white transition-all duration-150 rounded-md"
          className={({ isActive }) =>
            `${
              isActive ? "bg-red-400" : "bg-yellow-400"
            } flex items-center space-x-2 p-2 hover:bg-teal-500 hover:text-white transition-all duration-150 rounded-md`
          }
        >
          <Icon
            icon="material-symbols-light:dashboard-outline"
            className="text-xl"
          />
          <span className="hidden lg:block">Dashboard</span>
        </NavLink>
        <Link
          to="/settings"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700"
        >
          <Icon icon="mdi:cog" className="text-xl" />
          <span className="hidden lg:block">Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
