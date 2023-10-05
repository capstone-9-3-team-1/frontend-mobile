import { useQuery } from "react-query";
import { API } from "../../constants";
import axios from "axios";

const useRewards = () => {
    const fetchRewards = () =>
      axios
        .get(`${API}/rewards`)
        .then((res) => res.data);
  
    return useQuery({
      queryKey: ["rewards"],
      queryFn: fetchRewards,
    });
  };
  
  export default useRewards;


