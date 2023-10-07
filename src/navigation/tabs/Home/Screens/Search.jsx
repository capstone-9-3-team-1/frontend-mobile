import { useState, useEffect, useRef } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";
import { API } from "../../../../utils/constants";
import ProductCard from "./ProductCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios.get(`${API}/search/products/${searchTerm}`).then((res) => {
        setResult(res.data);
      });
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchTerm]);

  return (
    <SafeAreaView className="w-screen" > 
    <View className="flex flex-row items-center mx-2">
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
      <Ionicons name="arrow-back" size={20}/> 
      </TouchableOpacity>
   
      <View className="h-10 mx-1 bg-white rounded-full p-2 shadow-md flex-grow">
        <View className="flex-1 flex-row">
          <Ionicons name="search" size={20} className="flex-1"/>
          <TextInput
            ref={inputRef}
            className="flex-3 px-2"
            placeholder="Search products ..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
      </View>
      </View>  
       <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-row flex-wrap gap-2">
        {searchTerm
          ? result.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="w-48"
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
      </ScrollView>
    </SafeAreaView>

   
  );
};

export default Search;
