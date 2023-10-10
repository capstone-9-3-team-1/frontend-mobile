import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { FAQData } from "./FAQ";
import axios from "axios";
import { API } from "../utils/constants";
import { useEffect } from "react";

const userName = "Tina T.";

const items = [
  {
    id: 0,
    title: "Your Favorites",
    bodyText: [
      { id: 1, name: "Favorite 1" },
      { id: 2, name: "Favorite 2" },
      { id: 3, name: "Favorite 3" },
      { id: 4, name: "Favorite 4" },
    ],
  },
  {
    id: 1,
    title: "Rewards History",
    bodyText: [
      { id: 1, name: "Purchase 1" },
      { id: 2, name: "Purchase 2" },
    ],
  },
  {
    id: 2,
    title: "FAQ (Frequently Asked Questions)",
    bodyText: FAQData,
  },
  {
    id: 3,
    title: "Help",
    bodyText:
      "If you have any questions, encounter issues, or need assistance with the Atara app, our dedicated support team is just a message away. Feel free to contact us at **support@atara.org**, and we'll do our best to assist you promptly.",
  },
];

export default function UserScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fave, setFave] = useState([]);

  //const { user } = useUser();

  // useEffect(() => {
  //   axios.get(`${API}/userTokensBalance/${user.firstName}`).then((res) => {
  //     setBalance(res.data.tokensBalance)
  //   })

  // })

  const addNewLineAfterThirdWord = (inputString) => {
    const words = inputString.split(" ");
    if (words.length >= 3) {
      words.splice(3, 0, "\n");
      return words.join(" ");
    }
    return inputString;
  };

  const getFave = () => {
    axios.get(`${API}/products`).then((res) => {
      setFave(res.data.filter((item) => item.favorite === true));
    });
  };
  useEffect(() => {
    getFave();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const addIcon = (title) => {
    if (title === "Your Favorites") {
      return (
        <View className="flex justify-center items-center ml-3">
          <Ionicons name="bookmark" size={20} color="pink" />
        </View>
      );
    } else if (title === "Rewards History") {
      return (
        <View className="flex justify-center items-center ml-3">
          <Ionicons name="gift" size={20} color="#a2daff" />
        </View>
      );
    } else if (title === "Help") {
      return (
        <View className="flex justify-center items-center ml-3">
          <Ionicons name="help-circle-outline" size={20} color="#a2daff" />
        </View>
      );
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* User Profile Pic, Name, Points earned */}
        <View className="flex flex-row items-center mx-2 mt-3 ">
          {/* back button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={20} color="grey" />
          </TouchableOpacity>

          {/* user image circle */}
          <View className="relative ">
            <View className="rounded-full bg-white shadow-lg w-[90px] h-[90px] items-center justify-center">
              <Image
                source={require("../assets/TinaProfileImage.png")}
                className="w-[80px] h-[80px] rounded-full"
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("UpdateAccount")}
              className="h-8 w-8 items-center absolute bottom-[2] right-0  bg-white flex justify-center rounded-full py-1 drop-shadow-xl"
            >
              <Ionicons name="create-outline" size={20} color="grey" />
            </TouchableOpacity>
          </View>
          <View className="ml-2">
            <Text className="text-2xl font-semibold">{userName}</Text>
            <View className="flex-row gap-1  bg-green-100 text-slate-700 rounded-full px-1.5 py-[4px]">
              <Image
                className="h-5 w-5"
                source={require("../assets/AtaraCoin.png")}
              />
              <Text className="text-bold text-md pt-0.5">30</Text>
            </View>
          </View>
        </View>

        {/* Accordion List */}
        <View className="p-2 rounded-lg mt-3">
          {items.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  toggleAccordion(index);
                }}
              >
                <View className="flex-row border border-slate-300 rounded-lg m-1.5 justify-between bg-white shadow-lg">
                  <View className="flex flex-row">
                    {addIcon(item.title)}
                    <Text className="text-xl p-5">{item.title}</Text>
                  </View>
                  <View className="flex justify-center items-center" />
                  <Ionicons
                    name={
                      activeIndex === index ? "ios-arrow-up" : "ios-arrow-down"
                    }
                    size={20}
                    color="grey"
                  />
                </View>
              </TouchableOpacity>

              {/* Favorites */}
              {activeIndex === index && item.title === "Your Favorites" && (
                <ScrollView vertical showsHorizontalScrollIndicator={false}>
                  {fave.map((item) => (
                    <View
                      className="mx-3 my-[5px] h-40 bg-white  flex flex-wrap rounded-md drop-shadow-xl border-[1px] border-green-100"
                      key={item.id}
                    >
                      <View className="w-36 my-auto ml-2 bg-white drop-shadow-xl">
                        <Image
                          source={{ uri: item.imageUrl }}
                          className=" h-36"
                          resizeMode="contain"
                        />
                      </View>
                      <View className="ml-3 my-auto h-fit">
                        <Text className="font-bold text-green-800 ">
                          {item.business}
                        </Text>
                        <Text className="text-bold text-slate-800 text-md my-1">
                          {addNewLineAfterThirdWord(item.name)}
                        </Text>
                        <View className="flex-row gap-1 ">
                          <Image
                            className="h-5 w-5  bg-white drop-shadow-xl"
                            source={require("../assets/AtaraCoin.png")}
                          />
                          <Text className="text-bold text-md pt-0.5">
                            {item.tokenValue}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              )}

              {/* Rewards History */}
              {activeIndex === index && item.title === "Rewards History" && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.bodyText.map(item =>
                    <View className="border h-40 w-40 p-3 m-3">
                    <Text>{item.name}</Text>
                   </View> )}
                  
                  
                </ScrollView>
              )}

              {/* FAQ */}
              {activeIndex === index &&
                item.title === "FAQ (Frequently Asked Questions)" && (
                  <ScrollView>
                    {item.bodyText.map((faq, faqIndex) => (
                      <View
                        key={faqIndex}
                        className="border rounded-lg m-3 p-3 bg-light-blue-300"
                      >
                        <Text className="text-xl font-semibold mb-2">
                          {faq.question}
                        </Text>
                        <Text className="text-lg font-normal">
                          {faq.answer}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                )}

              {/* Other sections */}
              {activeIndex === index &&
                item.title !== "Your Favorites" &&
                item.title !== "Purchase History" &&
                item.title !== "FAQ (Frequently Asked Questions)" && (
                  <Text className="text-lg font-semibold p-5">
                    {item.bodyText}
                  </Text>
                )}
            </View>
          ))}
        </View>

        {/* Sign out */}
        <View className="flex items-center justify-center">
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
    <TouchableOpacity onPress={signOut} className="">
      <Text className="text-lg text-blue-400">Sign Out</Text>
    </TouchableOpacity>
  );
};
