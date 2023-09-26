import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useAuth, useUser } from "@clerk/clerk-expo";
import FAQScreen from "./FAQScreen";
import FavoriteItemsScreen from "./FavoriteItemsScreen";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const userName = "John Doe";
const userPoints = 100;

// Mock data
const items = [
  {
    id: 0,
    title: "Your Favorites",
    bodyText: "Blah blah blah",
  },
  {
    id: 1,
    title: "Purchase History",
    bodyText: "Woop woop",
  },
  {
    id: 2,
    title: "FAQ (Frequently Asked Questions)",
    bodyText: "I'm running out of words and sounds",
  },
  {
    id: 3,
    title: "Help",
    bodyText: "Welp you'll be alright... for now.",
  },
];

export default function UserScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { user } = useUser();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* User Profile Pic, Name, Points earned */}
        <View className="flex flex-row items-center m-5">
          <View className="rounded-full bg-white drop-shadow-lg">
            <Image
              source={{
                uri: user?.imageUrl,
              }}
              className="w-20 h-20 rounded-full"
            />
          </View>
          <View className="ml-2">
            <Text className="text-2xl font-semibold">{userName}</Text>
            <Text className="text-lg font-semibold">{userPoints} Points</Text>
          </View>
          <View className="flex-1 flex-row-reverse">
            <TouchableOpacity
              className="bg-green-500 p-3 rounded-xl"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text className="text-white font-bold text-xl">Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs for Favorites, History,and FAQ */}

        {/* Accordion List of stuff */}
        <View className="border p-2 rounded-lg bg-pink-100">
          {items.map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleAccordion(index)}>
                <View className="flex-row border rounded-lg m-3 justify-between bg-green-200">
                  <Text className="text-2xl font-semibold p-5">
                    {item.title}
                  </Text>
                  <View className="flex-grow justify-items-center" />
                  <View className="rounded-full bg-white p-3 h-14">
                    <Ionicons
                      name={
                        activeIndex === index
                          ? "ios-arrow-up"
                          : "ios-arrow-down"
                      }
                      size={30}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              {activeIndex === index && (
                <View className="flex-row border rounded-lg m-3 justify-between">
                  <Text className="text-lg font-semibold p-5">
                    {item.bodyText}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Sign out */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <SignOut />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};
