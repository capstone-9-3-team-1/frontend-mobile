import { ScrollView, SafeAreaView, View, Text, Image } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function ProductCard({ item }) {
  console.log(item.imageUrl);
  return (
    <View className="w-48 h-fit m-2 border border-gray-200 rounded-2xl">
      <Image
        source={{
          uri: item.imageUrl,
        }}
        className="rounded-t-lg h-48"
      />
      <View className="p-3 bg-slate-200 rounded-b-2xl ">
        <Text className="font-semibold text-base">{item.name}</Text>
        <Text className="">{item.business}</Text>
        <View className="flex-row gap-1">
          <Image
            className="h-4 w-4 drop-shadow-xl"
            source={require("../../../../assets/AtaraCoin.png")}
          />
          <Text className="">{item.tokenValue}</Text>
        </View>
      </View>
    </View>
  );
}
