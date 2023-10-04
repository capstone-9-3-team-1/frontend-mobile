import { useMutation } from "react-query";
import { API } from "../../constants";
import { useAuth } from "@clerk/clerk-expo";

export default function useCreateReceipt() {
  const { userId, getToken } = useAuth();
  const { mutate, isLoading, isError, data, error } = useMutation({
    mutationFn: async (photo) => {
      const res = await fetch(`${API}/receipts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photo, userId }),
      });
      if (!res.ok) {
        throw new Error("Network error");
      }
      return res.json();
    },
  });

  return {
    mutate,
    newReceiptIsLoading: isLoading,
    newReceiptIsError: isError,
    data,
    error,
  };
}
