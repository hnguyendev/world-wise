import { FC } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import useCity from "../hooks/useCity";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

interface CityProps {}

const City: FC<CityProps> = () => {
  const { data: city, isFetching } = useCity();
  const navigate = useNavigate();

  if (isFetching) return <Spinner />;

  const { cityName, emoji, date, notes } = city;

  return (
    <div className="bg-gray-600 px-8 py-6 w-full rounded-lg flex flex-col gap-6">
      <div className="">
        <h6 className="uppercase text-xs font-medium text-neutral-300">
          City name
        </h6>
        <h3 className="text-xl font-semibold flex items-center gap-4">
          <span className="text-3xl">{emoji}</span> {cityName}
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        <h6 className="uppercase text-xs font-medium text-neutral-300">
          You went to {cityName} on
        </h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="flex flex-col gap-2">
          <h6 className="uppercase text-xs font-medium text-neutral-300">
            Your notes
          </h6>
          <p>{notes}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h6 className="uppercase text-xs font-medium text-neutral-300">
          Learn more
        </h6>
        <a
          className="text-green-400 underline"
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div
        onClick={() => navigate(-1)}
        className=" border-white border-2 w-20 px-4 py-2 rounded-md flex items-center justify-center"
      >
        BACK
      </div>
    </div>
  );
};

export default City;
