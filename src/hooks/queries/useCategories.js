import { useQuery } from "react-query";

const fetchCategories = async () => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/categories`)
    if(!res.ok){
        throw new Error("network error");
    }
    return res.json()
}

export default function useCategories(){
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["categories"], // keeps track of this fetch
        queryFn: fetchCategories
    }) 
    return {isLoading, isError, data, error}
}
