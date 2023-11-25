import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCity } from "../services/apiCities";

const useCreateCity = () => {
  const queryClient = useQueryClient();

  const { isPending, error, mutate } = useMutation({
    mutationFn: createCity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isPending, error, mutate };
};

export default useCreateCity;
