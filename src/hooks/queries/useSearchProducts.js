import { useQuery } from "react-query";
import axios from "axios";

const useProducts = (searchTerm) => {
  const fetchProducts = (searchTerm) =>
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/search/products/${searchTerm}`)
      .then((res) => res.data);

  return useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => fetchProducts(searchTerm),
  });
};

export default useProducts;
