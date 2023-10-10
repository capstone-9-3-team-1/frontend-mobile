import { TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";

export default function Products({ products, navigation }) {
  return (
    <View className="flex-row flex-wrap gap-3">
      {products?.map((item) => {
        return (
          <TouchableOpacity
            className="w-48 p-2"
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
                favorite: item.favorite,
                shopLink: item.shopLink
              })
            }
          >
            <ProductCard item={item} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
