import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import React from "react";
import MainContainer from "./src/navigation/MainContainer";
import { getItemAsync, setItemAsync } from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <NavigationContainer>
        <MainContainer />
      </NavigationContainer>
    </ClerkProvider>
  );
}
