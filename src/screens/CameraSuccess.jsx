import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

const products = [
    { name: "Product A", points: 50 },
    { name: "Product B", points: 30 },
    { name: "Product C", points: 20 },
];

export default function ReceiptSummaryPage() {
    return (
        // Congrats
      <SafeAreaView className="flex items-center justify-center h-full">
        <View className="flex items-center">
          <Text className="text-3xl font-semibold text-center">Congrats!</Text>
          {/* Celebration Icon */}
          <Image
            source={require("./celebratory-icon.png")} // Replace with your celebratory icon
            className="mt-4 w-32 h-32"
          />
          {/* Products that got points in this transaction */}
          <Text className="text-2xl font-semibold mt-4">Receipt Summary</Text>
          <ScrollView className="max-h-40 mt-2">
            {products.map((product, index) => (
              <View key={index} className="flex flex-row justify-between py-2 border-b">
                <Text className="text-lg">{product.name}</Text>
                <Text className="text-lg font-semibold">{product.points} Points</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }