import { View, Text, ImageBackground } from "react-native";

export default function FeaturedRewardCard({ item }) {
    
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
      resizeMode="contain"
      borderRadius={30}
      className="h-48 w-80 opacity-80 hower:opacity-100  bg-white shadow-md"
    >
      <View className="flex-1 justify-end items-center ">
        <Text className="font-semibold text-lg text-black text-center leading-5 my-3">
          {insertNewlineAfterSecondSpace(item.name)}
        </Text>
      </View>
    </ImageBackground>
  );
}
