import { View, Text, Imag, ImageBackground } from "react-native";

export default function ArticleCard({item, width}) {

   

  return (

      <ImageBackground
      key={item.id}
        source={{ uri: item.imageUrl }}
        resizeMode="cover"
        borderRadius={30}
        className="h-52 "
      >
        <View className="flex-1 justify-end items-center ">
          <Text className="font-semibold text-lg text-white">{item.title}</Text>
        </View>
      </ImageBackground>
 
  );
}
