import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const products = [
  { name: "Mod Papayas Towels", points: 50 },
  { name: "Dr. Bronner's Magic Soaps ", points: 30 },
  { name: "Pure Silk Eco Floss", points: 20 },
];


const selectedProducts = [
  {productName:"Mod Papayas Towels",
   points: 15},
   {productName:"Repurpose Cutlery",
   points: 15},
   {productName:"Washing Block Soap",
   points: 12},
]

export default function ReceiptSummaryPage({ navigateFn }) {
  return (
    // Congrats
    <SafeAreaView className="flex items-center justify-center h-full">
      <View className="flex items-center">
        <Text className="text-3xl font-semibold text-center">Congrats!</Text>
        {/* Celebration Icon */}
        <MaterialIcons
          name={"celebration"}
          size={150}
          color={"rgb(34 197 94)"}
        />
        {/* Products that got points in this transaction */}
        <Text className="text-2xl font-semibold mt-4 mb-4">
          Receipt Summary
        </Text>
        <ScrollView className="max-h-40 flex w-60 mt-2">
          {selectedProducts.map((item, index) => (
            <View
              key={index}
              className="flex flex-row justify-between py-2 border-b"
            >
              <Text className="text-md">{item.productName}</Text>
              <Text className="text-md font-semibold">
                {item.points} Tokens
              </Text>
              
            </View>
          ))}
          <View className="flex flex-row justify-between py-2 ">
          <Text className="text-lg font-bold ">Total</Text>
              <Text className="text-lg font-semibold">
                42 Tokens
              </Text>
          </View>
        </ScrollView>

        {/* Button to return to Rewards Screen */}
        <TouchableOpacity
          className="bg-green-500 p-2 rounded-lg "
          onPress={navigateFn}
        >
          <Text className="text-white text-sm"> Confirm</Text>
        </TouchableOpacity>

        {/* FAQ Button */}
        {/* <TouchableOpacity
          className="bg-green-500 p-2 rounded-lg "
          onPress={() => {
            // Route for the FAQ page
          }}
        >
          <Text className="text-white text-sm"> FAQ</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
