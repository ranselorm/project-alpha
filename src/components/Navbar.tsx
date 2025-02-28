// import { FiMenu } from "react-icons/fi";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center">
      {/* Only show menu button on smaller screens */}
      <button
        onClick={toggleSidebar}
        className="text-xl p-2 focus:outline-none lg:hidden"
      >
        {/* <FiMenu /> */}
      </button>
      <div className="ml-auto flex items-center space-x-4">
        <span className="font-semibold">Kevin Harry</span>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </nav>
  );
};

export default Navbar;
