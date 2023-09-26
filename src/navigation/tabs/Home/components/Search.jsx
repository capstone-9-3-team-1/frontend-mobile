import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import useSearchProducts from "../../../../utils/hooks/queries/useSearchProducts"


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
   const [results, setResults] = useState([]);

  

  //  useEffect(() => {
  //   const getData = setTimeout(() => {
  //     const searchProducts = useSearchProducts(searchTerm);
  //    setResult(searchProducts);
  //   }, 2000)

  //   return () => clearTimeout(getData)
  // }, [searchTerm])

  // const handleSearch = async (searchTerm) => {
  //   try {
  //     const response = await axios.get(`${API_URL}?q=${searchTerm}`);
  //     setResults(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };



  return (
    <View>
      <TextInput
        className="flex-1 h-12 lg m-5 rounded-lg px-3 bg-red-300"
        placeholder="Enter search searchTerm"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {/* <Button title="Search" onPress={handleSearch} /> */}
    </View>
  );
};

export default Search;
