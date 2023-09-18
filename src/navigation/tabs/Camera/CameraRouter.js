import { View, Text } from "react-native";
import React from "react";
import CameraScreen from "./CameraScreen";
import SuccessScreen from "./SuccessScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CameraRouter() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LiveCamera"
    >
      <Stack.Screen name="LiveCamera" component={CameraScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
