import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Image, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";
import { API } from "../../../../utils/constants";
import ProductCard from "./ProductCard";

const Search = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);


  useEffect(() => {
    const getData = setTimeout(() => {
      axios.get(`${API}/search/products/${searchTerm}`).then((res) => {
        setResult(res.data);
      });
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchTerm]);

  return (
    <View className="mb-5">
      <View className="h-10 mx-3 bg-white rounded-full p-2 shadow-md">
        <View className="flex-1 flex-row">
          <Ionicons name="search" size={20} className="flex-1"></Ionicons>
          <TextInput
            className="flex-3 px-2"
            placeholder="Search products ..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
      </View>
      {searchTerm
        ? result.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("ProductShow", {
                  id: item.id,
                  image: item.imageUrl,
                  name: item.name,
                  spec: item.spec,
                  category: item.category,
                  business: item.business,
                  description: item.description,
                  price: item.price,
                  tokenValue: item.tokenValue,
                })
              }
            >
              <ProductCard item={item} />
            </TouchableOpacity>
          ))
        : null}
    </View>
  );
};

export default Search;
