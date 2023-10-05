import React, { useState } from 'react';
import { View, Text, Button, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

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
    bodyText: 'Woop woop',
  },
  {
    id: 2,
    title: 'FAQ (Frequently Asked Questions)',
    bodyText: "I'm running out of words and sounds",
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
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
          <View style={{ borderRadius: 50, backgroundColor: 'white', padding: 5 }}>
            <Image
              source={{
                uri: user?.imageUrl,
              }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{userName}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{userPoints} Points</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <TouchableOpacity
              style={{ backgroundColor: 'green', padding: 10, borderRadius: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Accordion List of stuff */}
        <View style={{ borderWidth: 2, borderColor: 'pink', borderRadius: 10, margin: 10 }}>
          {items.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  toggleAccordion(index);
                }}
              >
                {/* Tabs */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'lightgreen',
                    borderRadius: 10,
                    margin: 10,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>{item.title}</Text>
                  <View style={{ borderRadius: 50, backgroundColor: 'white', padding: 10 }}>
                    <Ionicons
                      name={activeIndex === index ? 'ios-arrow-up' : 'ios-arrow-down'}
                      size={30}
                      color="black"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              {activeIndex === index && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                  {item.title === 'Your Favorites' && (
                    <Carousel
                      data={item.bodyText}
                      renderItem={({ item }) => (
                        <View
                          style={{
                            backgroundColor: 'lightblue',
                            borderRadius: 10,
                            padding: 10,
                            margin: 10,
                          }}
                        >
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                        </View>
                      )}
                      sliderWidth={300}
                      itemWidth={200}
                      layout={'default'}
                    />
                  )}
                  {item.title !== 'Your Favorites' && (
                    <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10 }}>
                      {item.bodyText}
                    </Text>
                  )}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Sign out */}
        <View
          style={{ borderRadius: 20, flex: 1, alignItems: "center", justifyContent: "center" }}
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
    <View >
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};