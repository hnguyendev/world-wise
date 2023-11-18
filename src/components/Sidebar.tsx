import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { FC } from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-700 z-10 py-6 ${
        isOpen ? "w-[35rem] px-5" : "w-0 opacity-90"
      } flex flex-col items-center relative transition-all overflow-x-hidden duration-300`}
    >
      {isOpen ? (
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
      ) : null}
    </div>
  );
};

export default Sidebar;
