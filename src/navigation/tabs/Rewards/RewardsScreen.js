import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import useRewards from "../../../utils/hooks/queries/useRewards";

import FeaturedRewards from "./screens/FeaturedRewards";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ActivityIndicator } from "react-native";
import NotFeaturedRewards from "./screens/NotFeaturedRewards";
import { API } from "../../../utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";

const tokensPriceRange = ["", "50", "70", "100", "300", "500+"];
const products = [1, 2, 3, 4, 5, 6];

export default function RewardsScreen({ navigation }) {
  const [balance, setBalance] = useState(0)

  const rewards = useRewards();
  const { user } = useUser();

  useEffect(() => {
    axios.get(`${API}/userTokensBalance/${user.firstName}`).then((res) => {
      setBalance(res.data.tokensBalance)
    })
  },[])

  const insertNewlineAfterSecondSpace = (inputString) => {
    let spaceCount = 0;
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === " ") {
        spaceCount++;
        if (spaceCount === 3) {
          result += " \n";
        } else {
          result += " ";
        }
      } else {
        result += inputString[i];
      }
    }
    return result;
  };


  return (
    <SafeAreaView className="flex items-start bg-slate-100 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Circle, Name, and Points */}
        <View className="flex flex-row items-center m-5">
          <View className="rounded-full  bg-white drop-shadow-lg">
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <View className="w-14 h-14 flex justify-center items-center  rounded-full bg-[#cff9c2] border-[2px] border-green-200 shadow-lg">
                <Image
                  source={require("../../../assets/TinaProfileImage.png")}
                  className="w-12 h-12 rounded-full"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="ml-2">
           
            <View className="flex-row gap-1 bg-green-100 text-slate-700 rounded-full px-1.5 py-1">
              <Text className="font-bold text-sm">30</Text>
              <Image
                className="h-5 w-5"
                source={require("../../../assets/AtaraCoin.png")}
              />
            </View>
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
          {tokensPriceRange.map((num, i) => (
            <>
              <TouchableOpacity key={i}>
                {i === 0 ? (
                  <View className="w-11 h-11 mx-3 bg-[white] rounded-full  shadow-xl items-center justify-center my-auto">
                    <Ionicons name="search" size={20} />
                  </View>
                ) : (
                  <View className="w-11 h-11 mx-3 bg-[#a2daff] rounded-full  shadow-3xl items-center justify-center my-auto">
                    <Text className="text-white">{num}</Text>
                  </View>
                )}

                <Text className="text-center text-sm mt-1">
                  {i === 0
                    ? null
                    : insertNewlineAfterSecondSpace("up to 100 tokens")}
                </Text>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
        {/* Featured Rewards */}
        <View className="my-3">
          <Text className="text-2xl font-semibold pl-3">Featured Rewards</Text>
          <ScrollView horizontal>
            <View className="flex-row flex-wrap">
              {rewards.isLoading ? (
                <ActivityIndicator className="flex-1 justify-center items-center" />
              ) : (
                <FeaturedRewards navigation={navigation} />
              )}
            </View>
          </ScrollView>
        </View>
        {/* Not Featured Rewards */}
        <NotFeaturedRewards navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
