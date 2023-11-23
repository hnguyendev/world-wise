import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { RiExpandLeftLine } from "react-icons/ri";
import { useState } from "react";

const AppLayout = () => {
  const [isOpenClick, setIsOpenClick] = useState(true);
  const [isOpenHover, setisOpenHover] = useState(true);
  function handleOpen() {
    setIsOpenClick((open) => !open);
  }

  return (
    <div className="h-[100vh] p-5 flex relative overscroll-y-none">
      <button
        onClick={handleOpen}
        onMouseEnter={() => setisOpenHover(false)}
        onMouseLeave={() => setisOpenHover(true)}
        className={`absolute left-4 top-1/2 z-[100] transition duration-300 ${
          isOpenClick ? "translate-x-[35rem]" : "translate-x-0"
        }`}
      >
        <RiExpandLeftLine
          size={25}
          className={`${
            isOpenClick ? "rotate-0" : "rotate-180"
          } transition text-gray-600`}
        />
      </button>
      <Sidebar isOpenClick={isOpenClick} isOpenHover={isOpenHover} />
      <Map />
    </div>
  );
};

export default AppLayout;
