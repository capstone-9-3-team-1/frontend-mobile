import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FAQData = [
  {
    question: "How do you ensure the products are sustainable?",
    answer:
      "Our team conducts extensive research and checks against EPA standards to ensure that the products align with our sustainability criteria. We verify each product's environmental impact, sourcing practices and manufacturing method.",
  },
  {
    question: "I uploaded my receipt, but I never received the points. What happened?",
    answer:
      "If your account has not been credited points, either none of the purchases on your receipt match our eco-friendly criteria or there has been an error. Please try uploading your receipt photo with a dark background and stronger lighting for clarity. If the problem persists, please contact our team at the email address listed in the approval request form.",
  },
  // Add more FAQ items as we go
];

export default function FAQScreen() {
  const navigation= useNavigation();
    
  return (
    <ScrollView className="p-4">
        <View className="flex flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text className="text-3l font-semibold">X</Text>
            </TouchableOpacity>
        
      <Text className="text-3xl font-semibold mb-4">Frequently Asked Questions</Text>
      </View>
      {FAQData.map((faq, index) => (
        <View key={index} className="mb-6">
          <Text className="text-xl font-semibold">{faq.question}</Text>
          <Text className="text-lg mt-2">{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
