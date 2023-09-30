import { FlatList, TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";


export default function Products({products, navigation}) {

  return (
     <FlatList
            className="w-screen flex-1 flex-row flex-wrap pl-1"
            data={products}
            renderItem={({ item }) => (
              <TouchableOpacity
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
            )}
            vertical={true} // Enable horizontal scrolling
            showsVerticalScrollIndicator={false} // Hide horizontal scroll indicator
          /> 
  );
}
