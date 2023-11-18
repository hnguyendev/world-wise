import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../services/apiCities";

const useDeleteCity = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteCity } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err: string) => {
      console.log(err);
    },
  });

  return { isPending, deleteCity };
};

export default useDeleteCity;
