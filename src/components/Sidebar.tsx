import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { GoSidebarExpand } from "react-icons/go";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-700 px-5 py-6 ${
        isOpen ? `w-[35rem] px-15` : "w-0"
      } flex flex-col items-center relative transition-all duration-500`}
    >
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="absolute right-2"
      >
        <GoSidebarExpand
          size={25}
          className={`${isOpen ? "rotate-0" : "rotate-180"} transition`}
        />
      </button>

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
