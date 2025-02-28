import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const navLinks = [
  {
    title: "Overview",
    path: "/",
    icon: "material-symbols:dashboard-outline-rounded",
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: "ic:round-account-box",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "grommet-icons:transaction",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "mdi:cog",
  },
];

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
      <nav className="flex flex-col space-y-4 px-2 py-4">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-teal-600 text-white"
                  : "hover:bg-grey text-gray-600 hover:text-black"
              } flex items-center space-x-2 p-2 transition-all duration-150 rounded-md`
            }
          >
            <Icon icon={`${link.icon}`} className="text-xl" />
            <span className="">{link.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
