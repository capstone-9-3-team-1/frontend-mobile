import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import React from "react";

import MainContainer from "./src/navigation/MainContainer";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </ClerkProvider>
  );
}
