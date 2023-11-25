import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/apiCities";
import { useParams } from "react-router-dom";

const useCity = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useQuery({
    queryKey: ["city"],
    queryFn: () => getCity(id as string),
  });

  return { data, isFetching, error };
};

export default useCity;
