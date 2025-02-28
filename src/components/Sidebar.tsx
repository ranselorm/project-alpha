import { Link } from "react-router-dom";
// import { FiHome, FiSettings } from "react-icons/fi";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <aside
      className={`h-full bg-gray-900 text-white transition-all fixed lg:relative ${
        isOpen ? "w-64" : "w-0"
      } lg:w-full`}
    >
      <div className="p-4 flex flex-col h-full">
        <button onClick={toggle} className="text-white p-2 lg:hidden">
          ☰
        </button>
        <nav className="mt-8 flex flex-col space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700"
          >
            {/* <FiHome /> <span className="hidden lg:block">Dashboard</span> */}
          </Link>
          <Link
            to="/settings"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700"
          >
            {/* <FiSettings /> <span className="hidden lg:block">Settings</span> */}
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
