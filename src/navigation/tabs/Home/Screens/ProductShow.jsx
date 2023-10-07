import { useState, useEffect } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { API } from "../../../../utils/constants";

export default function ProductShow({ route, navigation }) {
  const [liked, setLiked] = useState(false);
  const {
    id,
    image,
    name,
    spec,
    category,
    business,
    description,
    price,
    tokenValue,
  } = route.params;

  const toggleFavorite = () => {
      const updatedProduct = {
        favorite: liked
      };
      axios.put(`${API}/products/${id}`, updatedProduct);
  };

  useEffect(()=>{
    toggleFavorite();
  }
  ,[liked])

  
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="m-10 flex h-screen items-center">
          <View className="relative">
            <Image
              style={{
                width: 350,
                height: 400,
              }}
              source={{
                uri: image,
              }}
              resizeMode="contain"
              className="h-fit"
            />
            <TouchableOpacity
              className="absolute bottom-0 right-3"
              onPress={()=>setLiked(!liked)}
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
          </View>
          <View className="flex-row my-6 ">
            <View className="self-start flex-1 space-y-1">
              <Text className=" text-3xl font-semibold ">{name}</Text>
              <Text className=" text-xl font-semibold ">{spec}</Text>
              <View className="flex-row gap-1">
                <Image
                  className="h-8 w-8 drop-shadow-xl"
                  source={require("../../../../assets/AtaraCoin.png")}
                />
                <Text className="text-2xl font-medium">{tokenValue}</Text>
              </View>
              {/* need to add rating here  */}
            </View>
          </View>
          <Text className="text-lg indent-8">{description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
