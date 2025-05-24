import { RootState } from "@/store/store";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

type NavbarProps = {
  toggleSidebar?: () => void;
  title?: string;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  // const user = useSelector((state: RootState) => state.user.user);
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
          <h3 className="text-base font-medium opacity-0">Overview</h3>
          <div className="flex gap-x-4">
            <div className="w-full bg-grey rounded-full relative flex items-center px-4">
              <Icon
                icon="material-symbols-light:search-rounded"
                className="absolute right-3 cursor-pointer size-5 text-main"
              />
              <input
                className="h-full py-2 focus:ring-0 focus:outline-none text-xs w-[300px] placeholder:text-main"
                placeholder="Search"
              />
            </div>
            <div className="flex gap-x-6 items-center">
              <div className="bg-grey text-black flex items-center justify-center rounded-full cursor-pointer h-8 w-8">
                <Icon
                  icon="iconamoon:notification-thin"
                  className="size-4 text-main"
                />
              </div>
              <div className="flex items-center gap-x-3">
                <div className="text-black w-8 h-8 flex items-center justify-center rounded-full cursor-pointer overflow-hidden">
                  <img
                    // src={user?.picture}
                    src={
                      "https://images.squarespace-cdn.com/content/v1/5e55243ba20fd3781edfa8ef/1730910582143-I3Y15WVRFS2QIQXU62OM/Atikur+Rahman+UK+Passport+Photo.jpg?format=500w"
                    }
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <p>{user?.role}</p> */}
                <p className="text-xs">Selorm</p>
                <Icon
                  icon="material-symbols:arrow-drop-down"
                  className="text-xl text-main"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
