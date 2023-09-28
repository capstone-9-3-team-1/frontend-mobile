import { useQuery } from "react-query";
import axios from "axios";
import { API } from "../../constants";

const useProducts = (searchTerm) => {
  const fetchProducts = (searchTerm) =>
    axios
      .get(`${API}/search/products/${searchTerm}`)
      .then((res) => res.data);

  return useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => fetchProducts(searchTerm),
  });
};

export default useProducts;
