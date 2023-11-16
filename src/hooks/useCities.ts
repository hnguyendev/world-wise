import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/apiCities";

const useCities = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  return { data, isLoading, error };
};

export default useCities;
