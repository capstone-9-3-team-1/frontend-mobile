import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import { FAQData } from './FAQ';

const userName = 'Tina S.';
const userPoints = 100;

const items = [
  {
    id: 0,
    title: 'Your Favorites',
    bodyText: [
      { id: 1, name: 'Favorite 1' },
      { id: 2, name: 'Favorite 2' },
      { id: 3, name: 'Favorite 3' },
      { id: 4, name: 'Favorite 4' },
    ],
  },
  {
    id: 1,
    title: 'Purchase History',
    bodyText: [
      { id: 1, name: 'Purchase 1' },
      { id: 2, name: 'Purchase 2' },
      { id: 3, name: 'Purchase 3' },
      { id: 4, name: 'Purchase 4' },
    ],
  },
  {
    id: 2,
    title: 'FAQ (Frequently Asked Questions)',
    bodyText: FAQData,
  },
  {
    id: 3,
    title: 'Help',
    bodyText:
      'If you have any questions, encounter issues, or need assistance with the Atara app, our dedicated support team is just a message away. Feel free to contact us at **support@atara.org**, and we\'ll do our best to assist you promptly.',
  },
];

export default function UserScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { user } = useUser();
  const nav = useNavigation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* User Profile Pic, Name, Points earned */}
        <View className="flex items-center m-5">
          <View className="rounded-full bg-white shadow-lg">
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
  
        {/* Accordion List of stuff */}
        <View className="border p-2 rounded-lg bg-pink-100">
          {items.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  toggleAccordion(index);
                }}
              >
                <View className="flex-row border rounded-lg m-3 justify-between bg-green-200">
                  <Text className="text-2xl font-semibold p-5">
                    {item.title}
                  </Text>
                  <View className="flex-grow justify-items-center" />
                  <View className="rounded-full bg-white p-3 h-14">
                    <Ionicons
                      name={activeIndex === index ? 'ios-arrow-up' : 'ios-arrow-down'}
                      size={30}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              {activeIndex === index && (
                <View className="flex-row border rounded-lg m-3 justify-between">
                  {item.title === 'Your Favorites' || item.title === 'Purchase History' ? (
                    <Carousel
                      data={item.bodyText}
                      renderItem={({ item }) => (
                        <View className="border bg-blue-300 rounded-lg p-3 m-3 h-40 w-40">
                          <Text className="text-xl font-semibold">{item.name}</Text>
                        </View>
                      )}
                      sliderWidth={300}
                      itemWidth={200}
                      layout="default"
                    />
                  ) : item.title === 'FAQ (Frequently Asked Questions)' ? (
                    <ScrollView>
                      {item.bodyText.map((faq, faqIndex) => (
                        <View key={faqIndex} className="border rounded-lg m-3 p-3 bg-light-blue-300">
                        <Text className="text-xl font-semibold mb-2">{faq.question}</Text>
                        <Text className="text-lg font-normal">{faq.answer}</Text>
                      </View>                      
                      ))}
                    </ScrollView>
                  ) : (
                    <Text className="text-lg font-semibold p-5">{item.bodyText}</Text>
                  )}
                </View>
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
    <TouchableOpacity onPress={signOut} className="bg-blue-500 p-3 rounded-xl">
      <Text className="text-white text-lg font-bold">Sign Out</Text>
    </TouchableOpacity>
  );
};

