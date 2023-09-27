import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import useSearchProducts from "../../../../utils/hooks/queries/useSearchProducts"

import axios from 'axios';
import { API } from '../../../../utils/constants';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
   

  //  useEffect(() => {
  //   const getData = setTimeout(() => {
  //     const searchProducts = useSearchProducts(searchTerm);
  //    setResult(searchProducts);
  //   }, 2000)

  //   return () => clearTimeout(getData)
  // }, [searchTerm])

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`${API}/search/products/${searchTerm}`);
      setResult(response.data);
      console.log(result)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <View>
      <TextInput
        className="flex-1 h-12 lg m-5 rounded-lg px-3 bg-red-300"
        placeholder="Enter search searchTerm"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <View>
        {result}
      </View>
    </View>
  );
};

export default Search;
