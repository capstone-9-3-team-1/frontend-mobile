import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import useHomeData from "../../../../utils/hooks/queries/useHomeData";
import ProductCard from "./ProductCard";
import { useUser } from "@clerk/clerk-expo";
import Search from "./Search";
import Ionicons from "react-native-vector-icons/Ionicons";
import ArticleCard from "./ArticleCard";

const articleBox = [1, 2, 3, 4];

export default function HomeScreen({ navigation }) {
  const { isLoading, products, categories, articles } = useHomeData();
  const { user } = useUser();

  function insertBreaksAtSpaces(inputString) {
    return inputString.replace(/[ \-]/g, "\n");
  }

  return (
    <SafeAreaView className="bg-slate-100">
      {isLoading ? (
        <View className="flex h-full justify-center items-center w-full">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {isLoading ? <></> : <></>}
          {/*  header: logo and profile circle  */}
          <View className="flex flex-row items-center">
            {/* logo */}
            <Image
              className="h-10 flex-1 ml-[-40%] shadow-lg"
              source={{
                uri: "https://storage.googleapis.com/atara_images/atara_logo.png",
              }}
              resizeMode="contain"
            />
            {/* profile circle  */}
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <View className=" m-5 shadow-lg">
                <Image
                  source={{
                    uri: user?.imageUrl,
                  }}
                  className="w-12 h-12 rounded-full"
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* Search simulation  */}
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <View className="h-10 mx-3 bg-white rounded-full p-2 shadow-md">
              <View className="flex-1 flex-row items-center">
                <Ionicons name="search" size={20} className="flex-1"></Ionicons>
                <Text className="px-2 text-slate-300">Search products ...</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text className="my-auto ml-3 mr-3 ">
              Search by{"\n"}
              <Text className="font-bold text-base text-slate-700">
                Category
              </Text>
            </Text>
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
                  className="mx-1"
                  key={item.id}
                >
                  <View className="columns-1 mb-3 flex items-center justify-center">
                    <View className="h-14 w-14 rounded-full m-3 drop-shadow-lg bg-white mb-1 ">
                      <Image
                        source={{ uri: item.imageUrl }}
                        className="h-14 w-14 rounded-full justify-center"
                      />
                    </View>
                    <Text className="text-slate-500 text-center font-semibold text-xs px-auto">
                      {insertBreaksAtSpaces(item.name)}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Rectangle boxes- articles? */}
          <View className="bg-green-100">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {articles.isLoading ? <ActivityIndicator /> : null}
              {articles.map((item) => {
                return (
                  <TouchableOpacity
                    // onPress={() =>
                    //   navigation.navigate("CategoryShow", {
                    //     id: item.id,
                    //     image: item.imageUrl,
                    //     name: item.name,
                    //     description: item.description,
                    //   })
                    // }
                    className="mx-2"
                    // key={item.id}
                  >
                    <ArticleCard item={item} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            {/* featured products- New Arrivals */}
            <Text className="text-2xl font-semibold mx-3 mt-3">
              New Arrivals
            </Text>
              <SafeAreaView>
              <FlatList
               className="flex-1 flex-row flex-wrap pl-1"
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
                horizontal={true} // Enable horizontal scrolling
                showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
              />
         

              </SafeAreaView>
             
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
