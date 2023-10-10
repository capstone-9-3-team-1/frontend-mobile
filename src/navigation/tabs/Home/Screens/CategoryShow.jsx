 import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import Products from "./Products";
import axios from "axios";
import { API } from "../../../../utils/constants";
import { useEffect, useState } from "react";

export default function CategoryShow({ route, navigation }) {
  const {
    id,
    image,
    name,
    shortName,
    description
  } = route.params;

  const [categorizedProducts, setCategorizedProducts] = useState([]);

  const getCategorizedProducts = () => {
    axios.get(`${API}/products`).then((res) =>{
      let data = res.data.filter(item => item.category === shortName)
      setCategorizedProducts(data)
    })
  }

  useEffect(()=>{
    getCategorizedProducts()
  },[])

  console.log(categorizedProducts)
   

  
  
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="mr-4"
      key={id}>
        <View className="flex flex-row items-center text-center px-auto mx-auto">
        <Image
        source={{
          uri: image
        }}
            resizeMode="contain"
            className="h-12 w-12"
          /> 
        <Text className="text-slate-600 text-3xl p-5">{name}</Text> 

        </View>
          
        <Text className="px-6 text-base">{description}</Text>
        <View className="items-center justify-center px-auto mx-auto">
        <Products products={categorizedProducts} navigation={navigation}/>
        </View>
        </View>   
       
    </ScrollView>
  </SafeAreaView>
  );
}
