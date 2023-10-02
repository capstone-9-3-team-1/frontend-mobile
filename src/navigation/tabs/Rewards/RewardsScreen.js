import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";

import Rewards from "./screens/Rewards";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const products = [1, 2, 3, 4, 5, 6];

const userName = "John Doe";
const userPoints = 100;
// const pointsRedeemed = 50; // Assign a value to pointsRedeemed

export default function RewardsScreen({ navigation }) {
  const { user } = useUser();
  return (
    <SafeAreaView className="flex items-start bg-slate-100 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Circle, Name, and Points */}
        <View className="flex flex-row items-center m-5">
          <View className="rounded-full bg-white drop-shadow-lg">
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={{
                  uri: user?.imageUrl,
                }}
                className="w-8 h-8 rounded-full"
              />
            </TouchableOpacity>
          </View>
          <View className="ml-2">
            <Text className="text-2xl font-semibold">{user?.firstName}</Text>
            <Text className="text-lg font-semibold">{userPoints} Points</Text>
          </View>

          {/* Redeemed Rewards History Button */}
          <View className="flex-1"></View>
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-lg"
            onPress={() => {
              // Route for the Rewards History
            }}
          >
            <Text className="text-white text-sm">Your Rewards</Text>
          </TouchableOpacity>
        </View>

        {/* Tokens Ranges */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {array.map((num) => (
            <View key={num} className=" p-8 rounded-full m-2 bg-white"></View>
          ))}
        </ScrollView>
        {/* New Rewards */}
        <Text className="text-2xl font-semibold">New Rewards</Text>
        <ScrollView horizontal>
          <View className="flex-row flex-wrap">
            {products.map((num) => (
              <View
                key={num}
                className="flex box-content h-48 w-48 m-2 rounded-3xl bg-white"
              ></View>
            ))}
          </View>
        </ScrollView>
       <Rewards/>     
      </ScrollView>
    </SafeAreaView>
  );
}
