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
import { useUser } from "@clerk/clerk-expo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Articles from "./Articles";
import Products from "./Products";


export default function HomeScreen({ navigation }) {
  const { isLoading, products, categories, articles } = useHomeData();
  const { user } = useUser();

  function insertBreaksAtSpaces(inputString) {
    return inputString.replace(/[ \-]/g, "\n");
  }

  return (
    <SafeAreaView className="bg-slate-100 flex h-full justify-center items-center w-full">
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="">
            {isLoading ? <></> : <></>}
            {/*  header: logo and profile circle  */}
            <View className="flex flex-row items-center">
              {/* logo */}
              <Image
                className="h-10 flex-1 ml-[-40%] bg-slate-100 shadow-lg"
                source={{
                  uri: "https://storage.googleapis.com/atara_images/atara_logo.png",
                }}
                resizeMode="contain"
              />
              {/* profile circle  */}
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <View className=" m-5 rounded-full bg-slate-100 shadow-lg">
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
                  <Ionicons
                    name="search"
                    size={20}
                    className="flex-1"
                  ></Ionicons>
                  <Text className="px-2 text-slate-300">
                    Search products ...
                  </Text>
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
                      <View className="h-14 w-14 rounded-full m-3 drop-shadow-lg bg-slate-100 mb-1 ">
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

            {/* Articles */}
            {articles.isLoading ? (
              <ActivityIndicator />
            ) : (
              <Articles navigation={navigation} />
            )}
            {/* featured products- */}
            <Text className="text-2xl font-semibold text-left  m-3">
              New Arrivals
            </Text>
            {products.isLoading ? (
              <ActivityIndicator />
            ) : (
              <Products products={products} navigation={navigation} />
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
