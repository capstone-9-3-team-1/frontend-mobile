import { useQuery } from "react-query";
import axios from "axios";

const useProducts = () => {
    const fetchProducts = () =>
      axios
        .get(`${process.env.EXPO_PUBLIC_API_URL}/products`)
        .then((res) => res.data);
  
    return useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
    });
  };
  
  export default useProducts;