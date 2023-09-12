import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const articleBox= [1, 2, 3, 4]
const products= [1, 2, 3, 4, 5, 6]

export default function HomeScreen({ navigation }) {
  return <SafeAreaView className="flex items-start">
    <ScrollView>
    {/* Search bar and User Circle */}
      <View className= "flex flex-row items-center">
        <TextInput placeholder="search" className="flex-1 h-12 rounded lg m-5 border rounded-lg px-3"></TextInput>
    <View className="border p-10 rounded-full m-5"></View>
    </View>

    {/* categories */}
    <Text className= "text-2xl font-semibold">Categories</Text>
    <ScrollView horizontal>
      {array.map(() =>  <View className="border p-16 rounded-full m-5"></View>)}
    </ScrollView>

    {/* rectangle boxes- articles? */}
<ScrollView horizontal>
      {articleBox.map(() =>  <View className="border flex box-content h-56 w-80 m-2">
        <TextInput placeholder="text"></TextInput>
        </View>)}
    </ScrollView>

    {/* featured products */}
    <Text className= "text-2xl font-semibold">New Arrivals</Text>
    <View className="flex-row w-screen flex-wrap m-1">
      {products.map(() => <View className="border flex box-content h-44 w-44 m-2 "></View>)}
    </View>
    </ScrollView>
  </SafeAreaView>
}
