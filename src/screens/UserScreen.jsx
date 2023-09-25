import { View, Text, Button, Image, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import FAQScreen from "./FAQScreen";
import FavoriteItemsScreen from "./FavoriteItemsScreen"
import { useState } from "react";

const userName = "John Doe";
const userPoints = 100;

// Mock data
const items = [
{
  id: 0,
  title: "Your Favorites",
  bodyText: "Blah blah blah"
},
{
  id: 1,
  title: "Purchase History",
  bodyText: "Woop woop"
},
{
  id: 2,
  title: "FAQ (Frequently Asked Questions)",
  bodyText: "I'm running out of words and sounds"
},
{
  id: 3,
  title: "Help",
  bodyText: "Welp you'll be alright... for now."
}
]


export default function UserScreen() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex===index ? -1: index);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {/* User Profile Pic, Name, Points earned */}
        <View className="flex flex-row items-center m-5">
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
            <View className="justify-items-end">
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-lg items-end"
            onPress={() => {
              // Route for Home
            }}
          >
            <Text className="text-white text-base"> Home </Text>
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
                  <Text className="text-2xl font-semibold p-5">{item.title}
                  <Text className="items-end">
                    {activeIndex === index ? " -" : " +"}</Text>
                </Text>
                </View>
              </TouchableOpacity>
              {activeIndex === index && (
                <View>
                  <Text>{item.bodyText}</Text>
                </View>
              )}
            </View>
          ))}
        </View>


          {/* Sign out */}
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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