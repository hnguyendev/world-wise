import { FC } from "react";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import useActive from "../hooks/useActive";

interface CityItemProps {
  city: {
    id: string;
    cityName: string;
    country: string;
    emoji: string;
    date: string;
    notes: string;
    position: {
      lat: number;
      lng: number;
    };
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem: FC<CityItemProps> = ({ city }) => {
  const { id, cityName, position, date, emoji } = city;
  const { openModal } = useModal();
  const { cityId, setActive } = useActive();

  return (
    <Link
      onClick={() => setActive(id)}
      to={`${id}?lat=${position.lat}&lng=${position?.lng}`}
      className={`bg-gray-600 rounded-md px-4 py-2 flex items-center gap-6 cursor-pointer transition hover:bg-opacity-60 ${
        cityId === id ? "border-4" : "border-l-4"
      } border-green-500 drop-shadow-md`}
    >
      <span className="text-2xl">{emoji}</span>
      <h3 className="text-lg font-semibold mr-auto">{cityName}</h3>
      <time className="">({formatDate(date)})</time>
      <button
        onClick={(e) => {
          e.preventDefault();
          openModal(id);
        }}
        className="bg-black w-6 h-6 rounded-full flex items-center justify-center transition hover:bg-orange-500"
      >
        <MdOutlineClear />
      </button>
    </Link>
  );
};

export default CityItem;
