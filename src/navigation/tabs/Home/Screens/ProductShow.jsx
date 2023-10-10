import { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import axios from "axios";
import { API } from "../../../../utils/constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import OpenURLButton from "./OpenUrlButton";

export default function ProductShow({ route, navigation }) {
  const [liked, setLiked] = useState(favorite);
  const {
    id,
    image,
    name,
    spec,
    favorite,
    category,
    business,
    description,
    shopLink,
    price,
    tokenValue,
  } = route.params;

  

  const toggleFavorite = () => {
    const updatedProduct = {
      favorite: liked,
    };
    axios.put(`${API}/products/${id}`, updatedProduct);
  };

  useEffect(() => {
    toggleFavorite();
  }, [liked]);
 

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <View className="h-10 mx-3 bg-white rounded-full p-2 shadow-md">
            <View className="flex-1 flex-row items-center">
              <Ionicons name="search" size={20} className="flex-1"></Ionicons>
              <Text className="px-2 text-slate-300">Search products ...</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="mx-5 flex h-screen items-center">
          <View className=" mx-10 relative bg-white w-screen h-[40%] rounded-3xl mt-[5%]">
            <Image
              style={{
                width: 300,
                height: 300,
              }}
              source={{
                uri: image,
              }}
              resizeMode="contain"
              className="h-fit mx-auto my-auto"
            />
            <TouchableOpacity
              className="absolute bottom-5 right-6"
              onPress={() => setLiked(!liked)}
            >
              {liked ? (
                <Image
                  className="h-10 w-10"
                  source={require("../../../../assets/faves/red-heart.png")}
                />
              ) : (
                <Image
                  className="h-10 w-10"
                  source={require("../../../../assets/faves/grey-heart.png")}
                />
              )}
            </TouchableOpacity>
            <View className="flex flex-col gap-4 flex-shrink-0 w-1/2 bottom-2">
              <View className="flex-row gap-3">
                <Text className="text-slate-400 text-[10px]">●</Text>
                <Text className="text-slate-300 text-[10px]">●</Text>
                <Text className="text-slate-300 text-[10px]">●</Text>
                <Text className="text-slate-300 text-[10px]">●</Text>
              </View>
            </View>
          </View>

          <View className="flex-row my-6 ">
            <View className="self-start flex-1 space-y-1">
              <Text className="text-2xl font-semibold text-slate-700">
                {name}
              </Text>
              <Text className="text-lg font-semibold text-green-700">
                {spec}
              </Text>
              <View className="flex-row gap-1">
                <Image
                  className="h-7 w-7 drop-shadow-xl"
                  source={require("../../../../assets/AtaraCoin.png")}
                />
                <Text className="text-lg font-medium text-slate-700">
                  {tokenValue}
                </Text>
              </View>
              {/* need to add rating here  */}
            </View>
          </View>
          <Text className="text-base text-slate-700 mt-[-10px] mb-3">
            {description}
          </Text>
          <View className="border border-green-300 p-2 w-full my-2  justify-center bg-[#cff9c2]">
          <OpenURLButton url={shopLink}>
            Buy Now
          </OpenURLButton>

          </View>
         

          {/* <TouchableOpacity
            className="border border-slate-300 p-2 rounded-full  w-full my-2 flex-row  justify-between"
            onPress={handlePress}
          >
            <Text>Buy now</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
