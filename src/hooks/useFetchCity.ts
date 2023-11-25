import { useQuery } from "@tanstack/react-query";
import { fetchCityData } from "../services/apiCities";
import useUrlPosition from "./useUrlPosition";

const useFetchCity = () => {
  const [lat, lng] = useUrlPosition();

  const { isLoading, error, data } = useQuery({
    queryKey: ["city-form", lat, lng],
    queryFn: () => fetchCityData(lat, lng),
    retry: false,
  });

  return { isLoading, error, data };
};

export default useFetchCity;
