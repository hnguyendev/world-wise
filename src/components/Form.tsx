import { FC, useState } from "react";
import { Form as FormComponent, useNavigate } from "react-router-dom";
import useFetchCity from "../hooks/useFetchCity";
import Spinner from "./Spinner";
import Message from "./Message";

export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const { isLoading, error, data } = useFetchCity();

  if (isLoading) return <Spinner />;

  if (error) return <Message message="Doesn't look like a city" />;

  console.log(data);
  // const { city, countryName, countryCode, locality } = data;

  return (
    <FormComponent
      method="POST"
      className="bg-gray-600 rounded-md px-5 py-6 w-full flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2 relative">
        <label>City name</label>
        <input
          className="w-full rounded-md px-4 py-2 text-black"
          name="cityName"
          type="text"
          value={data?.city || data?.locality || cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className="absolute right-4 top-1/2 text-2xl">
          {convertToEmoji(data?.countryCode)}
        </span>
      </div>
      <div className="flex flex-col gap-2 relative">
        <label>When did you go to X ?</label>
        <input
          className="w-full rounded-md px-4 py-2 text-black"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
          onClick={(e) => {
            e.preventDefault();
          }}
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
    </FormComponent>
  );
};

export default Form;
