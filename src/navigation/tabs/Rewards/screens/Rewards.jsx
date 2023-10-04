import { TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";


export default function Rewards({rewards, navigation}) {

  return (
     <View className="w-screen flex-1 flex-row flex-wrap pl-1">
        {rewards?.map((item) => {
            return (
                <TouchableOpacity
                className="w-48"
                key={item.id}
                onPress={() =>
                  navigation.navigate("RewardShow", {
                    id: item.id,
                    imageUrl: item.imageUrl,
                    name: item.name,
                    description: item.business,
                    tokensAmount: item.tokensAmount,
                  })
                }
              >
                <ProductCard item={item} />
              </TouchableOpacity>

            )
        })}
              
            </View>
  );
}
