import { useQuery } from "react-query";
import { API } from "../../constants";
import axios from "axios";

const useArticles = () => {
    const fetchArticles = () =>
      axios
        .get(`${API}/articles`)
        .then((res) => res.data);
  
    return useQuery({
      queryKey: ["articles"],
      queryFn: fetchArticles,
    });
  };
  
  export default useArticles;


