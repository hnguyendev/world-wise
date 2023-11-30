import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/apiCities";

const useCity = (id: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["city", id],
    queryFn: () => (id ? getCity(id) : null),
  });

  return { data, isFetching, error };
};

export default useCity;
