import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetchCity from "../hooks/useFetchCity";
import Spinner from "./Spinner";
import Message from "./Message";
import useUrlPosition from "../hooks/useUrlPosition";
import useCreateCity from "../hooks/useCreateCity";

function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const { isLoading, error, data } = useFetchCity();
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  const { isPending, mutate } = useCreateCity();

  useEffect(() => {
    setCityName(data?.city || data?.locality || "");
  }, [data?.city, data?.locality]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country: data?.countryName,
      emoji: convertToEmoji(data?.countryCode),
      date,
      notes,
      position: { lat, lng },
    };

    mutate(newCity);

    return navigate("/app/cities");
  }

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <Message
        message="🙌 Doesn't look like a city.
      Expecting latitude in (+/- 90) and longitude in (+/- 180)"
      />
    );

  // const { city, countryName, countryCode, locality } = data;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-600 rounded-md px-5 py-6 w-full flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2 relative">
        <label>City name</label>
        <input
          className="w-full rounded-md px-4 py-2 text-black"
          name="cityName"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className="absolute right-4 top-1/2 text-2xl">
          {convertToEmoji(data?.countryCode)}
        </span>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label>When did you go to X ?</label>
        <DatePicker
          className="w-full rounded-md px-4 py-2 text-black"
          id="date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDate(date as Date)}
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <label>Notes</label>
        <input
          className="w-full rounded-md px-4 py-2 text-black"
          name="notes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          disabled={isPending}
          className="bg-green-400 w-20 px-4 py-2 rounded-md flex items-center justify-center"
        >
          ADD
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          className="border-white border-2 w-20 px-4 py-2 rounded-md flex items-center justify-center"
        >
          BACK
        </button>
      </div>
    </form>
  );
};

export default Form;
