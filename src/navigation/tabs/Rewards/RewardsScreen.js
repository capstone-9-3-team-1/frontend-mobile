import {
  View,
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
    <SafeAreaView className="flex items-start">
      <ScrollView>
        {/* User Circle, Name, and Points */}
        <View className="flex flex-row items-center m-5">
          <View className="w-20 h-20 rounded-full bg-blue-500"></View>
          <View className="ml-3">
            <Text className="text-2xl font-semibold">{userName}</Text>
            <Text className="text-lg font-semibold">{userPoints} Points</Text>
          </View>
          {/* Redeemed Rewards History Button */}
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-lg ml-16"
            onPress={() => {
              // Route for the Rewards History
            }}
          >
            <Text className="text-white text-sm">Your Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Top Categories */}
        <Text className="text-2xl font-semibold">  Top Categories</Text>
        <ScrollView horizontal>
          {array.map((num) => (
            <View key={num} className="border p-16 rounded-full m-2"></View>
          ))}
        </ScrollView>

        {/* Rectangle boxes - You can include them if needed */}
        <ScrollView horizontal>
          {articleBox.map((num) => (
            <View key={num} className="border flex box-content h-56 w-80 m-2">
              <TextInput placeholder="text"></TextInput>
            </View>
          ))}
        </ScrollView>

        {/* New Rewards */}
        <Text className="text-2xl font-semibold">  New Rewards</Text>
        <View className="flex-row w-screen flex-wrap m-1">
          {products.map((num) => (
            <View
              key={num}
              className="border flex box-content h-48 w-48 m-2"
            ></View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
