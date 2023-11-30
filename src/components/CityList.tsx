import Spinner from "./Spinner";
import useCities from "../hooks/useCities";
import CityItem from "./CityItem";

interface city {
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
}

const CityList = () => {
  const { data: cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  return (
    <ul className="flex flex-col gap-6 w-full h-[65vh] overflow-y-auto overflow-x-hidden scrollbar">
      {cities.map((city: city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
