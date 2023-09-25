import { useMutation } from "react-query";

export default function useCreateReciept() {
  const { mutate, isLoading, isError, data, error } = useMutation({
    mutationFn: async (photo) => {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/reciept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(photo),
      });
      if (!res.ok) {
        throw new Error("Network error");
      }
      return res.json();
    },
  });

  return {
    mutate,
    newRecieptIsLoading: isLoading,
    newRecieptIsError: isError,
    data,
    error,
  };
}
