import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import useSearchProducts from "../../../../utils/hooks/queries/useSearchProducts"

import axios from 'axios';
import { API } from '../../../../utils/constants';
import ProductCard from '../Screens/ProductCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
   
  //console.log(useSearchProducts(searchTerm))



  useEffect(() => {
    const getData = setTimeout(() => {
      axios
     .get(`${API}/search/products/${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data)
      });
    }, 1000)

    return () => clearTimeout(getData)
  }, [searchTerm])

  return (
    <View>
      <View className=" mx-3 bg-white rounded-full p-4 shadow-md">
      <View className="relative">
      <TextInput
        className="bg-white "
        placeholder="Search..."
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
     
    </View>
    </View>
    {result.map(item => <ProductCard item={item} />)}

    </View>
    
    

  );
};

export default Search;
