import { View, Text, Imag, ImageBackground } from "react-native";

export default function ArticleCard({ item }) {
  const insertNewlineAfterSecondSpace = (inputString) => {
    let spaceCount = 0;
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === " ") {
        spaceCount++;
        if (spaceCount === 3) {
          result += " \n";
        } else {
          result += " ";
        }
      } else {
        result += inputString[i];
      }
    }
    return result;
  };

  return (
    <ImageBackground
      key={item.id}
      source={{ uri: item.imageUrl }}
      resizeMode="cover"
      borderRadius={30}
      className="h-48 w-80 opacity-80 hower:opacity-100  bg-white rounded-3xl shadow-md"
    >
      <View className="flex-1 justify-end items-center ">
        <Text className="font-bold text-xl text-white text-center leading-5 my-3">
          {insertNewlineAfterSecondSpace(item.title)}
        </Text>
      </View>
    </ImageBackground>
  );
}
