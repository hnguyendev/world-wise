import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { RiExpandLeftLine } from "react-icons/ri";
import { useState } from "react";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  function handleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="h-[100vh] p-5 flex relative overscroll-y-none">
      <button
        onClick={handleOpen}
        className={`absolute left-4 top-1/2 z-50 transition duration-300 ${
          isOpen ? "translate-x-[35rem]" : "translate-x-0"
        }`}
      >
        <RiExpandLeftLine
          size={25}
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } transition text-gray-600`}
        />
      </button>
      <Sidebar isOpen={isOpen} />
      <Map />
    </div>
  );
};

export default AppLayout;
