import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import useHomeData from "../../../../utils/hooks/queries/useHomeData";
import ProductCard from "./ProductCard";
import { useUser } from "@clerk/clerk-expo";
import Search from "../components/Search";

const articleBox = [1, 2, 3, 4];

export default function HomeScreen({ navigation }) {
  const { isLoading, products, categories } = useHomeData();
  const { user } = useUser();

  return (
    <SafeAreaView className="flex  bg-slate-100">
      {isLoading ? (
        <View className="flex h-full justify-center items-center w-full">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {isLoading ? <></> : <></>}
          {/* Search bar and User Circle */}
          <View className="flex">
            <Image
              className="h-10 flex"
              source={{
                uri: "https://storage.googleapis.com/atara_images/atara_logo.png",
              }}
              resizeMode="contain"
            />

            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <View className=" m-5 drop-shadow-lg">
                <Image
                  source={{
                    uri: user?.imageUrl,
                  }}
                  className="w-12 h-12 rounded-full"
                />
              </View>
            </TouchableOpacity>
            <Search />
          </View>
          {/* categories */}
          <Text className="text-2xl font-semibold mx-3">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.isLoading ? <ActivityIndicator /> : null}
            {categories?.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CategoryShow", {
                      id: item.id,
                      image: item.imageUrl,
                      name: item.name,
                      description: item.description,
                    })
                  }
                >
                  <View key={item.id} className="columns-1 mb-3">
                    <View className=" rounded-full m-3 drop-shadow-lg bg-white mb-1">
                      <Image
                        source={{ uri: item.imageUrl }}
                        className="h-32 w-32 rounded-full"
                      />
                    </View>
                    <Text className="text-slate-500 h-5 mx-auto font-semibold text-base">
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Rectangle boxes- articles? */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {articleBox.map((num) => (
              <View
                key={num}
                className=" flex box-content h-56 w-80 m-2 rounded-3xl bg-green-200"
              >
                <Text>{num}</Text>
              </View>
            ))}
          </ScrollView>

          {/* featured products- New Arrivals */}

          <Text className="text-2xl font-semibold mx-3 mt-3">New Arrivals</Text>
          <View className="flex flex-row flex-wrap justify-start m-1">
            <ScrollView>
              {products.map((item, i) => (
                <TouchableOpacity
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
                  key={item.id}
                >
                  <ProductCard item={item} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}


