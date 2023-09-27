import { useQuery } from "react-query";
import { API } from "../../constants";

import axios from "axios";

const useProducts = () => {
    const fetchProducts = () =>
      axios
        .get(`${API}/products`)
        .then((res) => res.data);
  
    return useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
    });
  };
  
  export default useProducts;

