import React, { FC } from "react";
import { MdOutlineClear } from "react-icons/md";

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

  return (
    <li className="bg-gray-600 rounded-md px-4 py-2 flex items-center gap-6 cursor-pointer transition hover:bg-opacity-60 border-l-4 border-l-green-500">
      <span className="text-2xl">{emoji}</span>
      <h3 className="text-lg font-semibold mr-auto">{cityName}</h3>
      <time className="">({formatDate(date)})</time>
      <button className="bg-black w-6 h-6 rounded-full flex items-center justify-center transition hover:bg-orange-500">
        <MdOutlineClear />
      </button>
    </li>
  );
};

export default CityItem;