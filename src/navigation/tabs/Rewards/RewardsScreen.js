import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const articleBox = [1, 2, 3, 4];
const products = [1, 2, 3, 4, 5, 6];

const userName = "John Doe";
const userPoints = 100;
// const pointsRedeemed = 50; // Assign a value to pointsRedeemed

export default function RewardsScreen({ navigation }) {
  return (
    <SafeAreaView className="flex items-start bg-slate-100 ">
      <ScrollView>
        {/* User Circle, Name, and Points */}
        <View className="flex flex-row items-center m-5">
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View className="rounded-full bg-white drop-shadow-lg">
              <Image
                source={{
                  uri: "https://media.licdn.com/dms/image/D4E03AQHG9HMxAQd-Rg/profile-displayphoto-shrink_400_400/0/1663609290324?e=1700697600&v=beta&t=29-An9v16nHW_EUNVAwCizVQ7DAhai-Mv8yBndT5C6U",
                }}
                className="w-20 h-20 rounded-full"
              />
            </View>
            <View className="ml-2">
              <Text className="text-2xl font-semibold">{userName}</Text>
              <Text className="text-lg font-semibold">{userPoints} Points</Text>
            </View>
          </TouchableOpacity>
          {/* Redeemed Rewards History Button */}
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-lg ml-40"
            onPress={() => {
              // Route for the Rewards History
            }}
          >
            <Text className="text-white text-sm">Your Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Top Categories */}
        <Text className="text-2xl font-semibold mx-3"> Top Categories</Text>
        <ScrollView horizontal>
          {array.map((num) => (
            <View key={num} className=" p-16 rounded-full m-2 bg-white"></View>
          ))}
        </ScrollView>

        {/* Rectangle boxes - You can include them if needed */}
        <ScrollView horizontal>
          {articleBox.map((num) => (
            <View
              key={num}
              className="flex box-content h-56 w-80 m-2 rounded-3xl bg-white"
            >
              <TextInput placeholder="text"></TextInput>
            </View>
          ))}
        </ScrollView>

        {/* New Rewards */}
        <Text className="text-2xl font-semibold">New Rewards</Text>
        <View className="flex-row w-screen flex-wrap m-1">
          {products.map((num) => (
            <View
              key={num}
              className="flex box-content h-48 w-48 m-2 rounded-3xl bg-white"
            ></View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
