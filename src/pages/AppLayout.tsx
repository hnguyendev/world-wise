import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <div className="h-[100vh] p-5 flex relative overscroll-y-none">
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
