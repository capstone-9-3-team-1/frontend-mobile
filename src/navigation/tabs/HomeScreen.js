import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const articleBox = [1, 2, 3, 4];
const products = [1, 2, 3, 4, 5, 6]; //

import useProducts from "../../hooks/queries/useProducts";

const categories = [
  require("../../assets/category-icons/1.jpg"),
  require("../../assets/category-icons/2.jpg"),
  require("../../assets/category-icons/4.jpg"),
  require("../../assets/category-icons/3.jpg"),
];

export default function HomeScreen({ navigation }) {
  const { isLoading, isError, data, error } = useProducts();
  console.log(data)

  return (
    <SafeAreaView className="flex  bg-slate-100">
      <ScrollView className="p-4">
        {/* Search bar and User Circle */}
        <View className="flex flex-row items-center">
          <TextInput
            placeholder="Search products"
            className="flex-1 h-12 lg m-5 rounded-lg px-3 bg-white"
          ></TextInput>
          <View className="rounded-full m-5 bg-white drop-shadow-lg">
            <Image
              source={{
                uri: "https://media.licdn.com/dms/image/D4E03AQHG9HMxAQd-Rg/profile-displayphoto-shrink_400_400/0/1663609290324?e=1700697600&v=beta&t=29-An9v16nHW_EUNVAwCizVQ7DAhai-Mv8yBndT5C6U",
              }}
              className="w-20 h-20 rounded-full"
            />
          </View>
        </View>
        {/* categories */}
        <Text className="text-2xl font-semibold mx-3"> Categories</Text>
        <ScrollView horizontal>
          {categories.map((item) => {
            return (
              <View className="rounded-full m-3 drop-shadow-lg">
                <Image source={item} className="h-20 w-20 rounded-full" />
              </View>
            );
          })}
        </ScrollView>

        {/* Rectangle boxes- articles? */}
        <ScrollView horizontal>
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
        <Text className="text-2xl font-semibold mx-3 mt-3"> New Arrivals</Text>
        <View className="flex-row w-screen flex-wrap m-1">
          { isLoading ? <ActivityIndicator/> : null}
          {
          data?.map((item, i) => (
            <View
              key={i}
              className="flex box-content h-48 w-48 m-2 rounded-3xl bg-blue-100"
            >
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                className="h-full rounded-3xl"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
