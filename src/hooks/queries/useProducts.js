import { useQuery } from "react-query";

const fetchProducts = async () => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products`)
    if(!res.ok){
        throw new Error("network error");
    }
    return res.json()
}

export default function useProducts(){
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["products"], // keeps track of this fetch
        queryFn: fetchProducts
    }) 
    return {isLoading, isError, data, error}
}
