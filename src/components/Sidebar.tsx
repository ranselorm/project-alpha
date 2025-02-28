import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-gray-900 text-white transition-all ${
        isOpen ? "w-64" : "w-0"
      } lg:w-64 flex flex-col`}
    >
      <div className="p-4">
        <button onClick={toggle} className="text-white p-2 lg:hidden">
          <Icon icon="hugeicons:menu-03" />
        </button>
      </div>
      <nav className="mt-8 flex flex-col space-y-4">
        <Link
          to="/"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700"
        >
          <Icon icon="mdi:home" className="text-xl" />
          <span className="hidden lg:block">Dashboard</span>
        </Link>
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
