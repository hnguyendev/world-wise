import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { FC } from "react";

interface SidebarProps {
  isOpenClick: boolean;
  isOpenHover: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpenClick, isOpenHover }) => {
  const sidebarStyle = isOpenClick
    ? { width: "35rem", visibility: "visible" }
    : { width: 0, visibility: "hidden" };

  return (
    <div
      className="bg-gray-700 flex-shrink-0 overflow-x-hidden transition duration-500 relative"
      style={sidebarStyle as object}
    >
      <div className="h-full w-[35rem] px-5 py-6 flex flex-col items-center">
        {
          <>
            <Logo />
            <AppNav />
            <Outlet />
            <footer className="mt-auto">
              <p className="text-neutral-300">
                &copy; Copyright {new Date().getFullYear()} by XDD
              </p>
            </footer>
          </>
        }
      </div>
      <div
        className={`bg-black ${
          isOpenHover ? "bg-transparent invisible" : "bg-opacity-20"
        } h-full w-full absolute top-0 z-50 transition-all duration-300`}
      ></div>
    </div>
  );
};

export default Sidebar;
