import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-red-100 shadow-md p-4 flex items-center">
      {/* Only show menu button on smaller screens */}
      <button
        onClick={toggleSidebar}
        className="text-xl p-2 focus:outline-none lg:hidden"
      >
        <Icon icon="hugeicons:menu-03" className="size-6" />
      </button>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-start flex-col">
          <span className="text-sm">Welcome,</span>
          <p className="font-semibold">Randy Selorm</p>
        </div>
        <Button>Helo</Button>
        <p>Search</p>
        <div className="flex gap-x-3">
          <div className="bg-white text-black p-2 flex items-center justify-center rounded-full">
            <Icon icon="stash:question-light" className="size-4" />
          </div>
          <div className="bg-white text-black p-2 flex items-center justify-center rounded-full">
            <Icon icon="iconamoon:notification-thin" className="size-4" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
