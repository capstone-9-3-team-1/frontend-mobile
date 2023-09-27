import { useQuery } from "react-query";
import { API } from "../../constants";
import axios from "axios";

const useCategories = () => {
    const fetchCategories = () =>
      axios
        .get(`${API}/categories`)
        .then((res) => res.data);
  
    return useQuery({
      queryKey: ["categories"],
      queryFn: fetchCategories,
    });
  };
  
  export default useCategories;


