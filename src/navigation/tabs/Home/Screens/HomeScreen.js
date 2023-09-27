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
import Search from "./Search";

const articleBox = [1, 2, 3, 4];

export default function HomeScreen({ navigation }) {
  const { isLoading, products, categories } = useHomeData();
  const { user } = useUser();

  function insertBreaksAtSpaces(inputString) {
    return inputString.replace(/[ \-]/g, "\n");
  }

  return (
    <SafeAreaView className="  bg-slate-100">
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
          <Search />

          {/* categories */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text className="my-auto ml-3 mr-3">
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
                >
                  <View
                    key={item.id}
                    className="columns-1 mb-3 flex items-center justify-center"
                  >
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
            {articleBox.map((num) => (
              <View
                key={num}
                className=" flex box-content h-56 w-80 m-2 rounded-3xl bg-white"
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
            
          </View>
          
        </ScrollView>
      )}
    </SafeAreaView>
  );
}


