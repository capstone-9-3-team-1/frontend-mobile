import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import React from "react";
import MainContainer from "./src/navigation/mainContainer/MainContainer";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import { QueryClient, QueryClientProvider } from "react-query";

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

// use at Demo 

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

const queryClient = new QueryClient();

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainContainer />
        </NavigationContainer>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
