import useCities from "../hooks/useCities";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

interface city {
  id: string;
  country: string;
  emoji: string;
}

interface country extends city {}

const CountryList = () => {
  const { data, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  const countries = data.reduce((arr: city[], city: city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-auto overflow-x-hidden grid grid-cols-2 content-start gap-6 scrollbar">
      {countries.map((country: country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
