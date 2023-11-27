import { FC } from "react";

interface CountryItemProps {
  country: {
    id: string;
    country: string;
    emoji: string;
  };
}

const CountryItem: FC<CountryItemProps> = ({ country }) => {
  return (
    <li className="bg-gray-600 rounded-lg px-6 py-4 border-l-4 border-l-yellow-600 flex flex-col items-center gap-2">
      <span className="text-3xl">{country.emoji}</span>
      <span className="text-lg font-semibold">{country.country}</span>
    </li>
  );
};

export default CountryItem;
