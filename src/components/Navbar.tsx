import { RootState } from "@/store/store";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

type NavbarProps = {
  toggleSidebar?: () => void;
  title?: string;
};

const Navbar = ({ toggleSidebar, title }: NavbarProps) => {
  const user = useSelector((state: RootState) => state.user.user);
  const users = useSelector((state: RootState) => state.user.users);

  console.log("IN NAVBAR", users);

  return (
    <nav className="bg-white border-b flex items-center">
      <div className="container mx-auto p-4">
        <button
          onClick={toggleSidebar}
          className="text-xl p-2 focus:outline-none lg:hidden"
        >
          <Icon icon="hugeicons:menu-03" className="size-6" />
        </button>
        <div className="flex justify-between w-full items-center gap-x-20">
          <h3 className="text-2xl font-text">{title}</h3>
          <div className="flex gap-x-6">
            <div className="w-full bg-grey rounded-full relative flex items-center px-4">
              <Icon
                icon="material-symbols-light:search-rounded"
                className="absolute right-3 cursor-pointer size-5"
              />
              <input
                className="h-full focus:ring-0 focus:outline-none text-xs w-[300px]"
                placeholder="Search"
              />
            </div>
            <div className="flex gap-x-6 items-center">
              <div className="bg-grey text-black p-3 flex items-center justify-center rounded-full cursor-pointer">
                <Icon icon="iconamoon:notification-thin" className="size-4" />
              </div>
              <div className="flex items-center gap-x-3">
                <div className="text-black w-10 h-10 flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                  <img
                    src="/profile.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
