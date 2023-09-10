import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

// Screens
import HomeScreen from "./tabs/HomeScreen";
import RewardsScreen from "./tabs/RewardsScreen";
import QuestsScreen from "./tabs/QuestsScreen";
import UserScreen from "./tabs/UserScreen";
import CameraScreen from "./tabs/CameraScreen";
import Welcome from "../screens/Welcome";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

export default function MainContainer() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <SignedOut>
        <Auth />
      </SignedOut>
      <SignedIn>
        <View className="h-full">
          <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
              tabBarShowLabel: false,
              tabBarLabelPosition: "below-icon",
              tabBarActiveTintColor: "green",
              tabBarInactiveTintColor: "grey",
              tabBarLabelStyle: {
                fontSize: 11,
              },
              headerShown: false,
            }}
          >
            <Tab.Screen
              name={"Home"}
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "home" : "home-outline";

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              }}
            />
            <Tab.Screen
              name={"Rewards"}
              component={RewardsScreen}
              options={{
                tabBarLabel: "Rewards",
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "gift" : "gift-outline";

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              }}
            />
            <Tab.Screen
              name={"Camera"}
              component={CameraScreen}
              options={{
                tabBarLabel: "Camera",
                tabBarIcon: ({ focused, color, size }) => (
                  <View className=" w-20 h-20 bg-white flex justify-center items-center rounded-full shadow-md">
                    <Ionicons name={"camera"} size={size * 1.5} color={color} />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name={"Quests"}
              component={QuestsScreen}
              options={{
                tabBarLabel: "Quests",
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "trophy" : "trophy-outline";

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              }}
            />
            <Tab.Screen
              name={"Dashboard"}
              component={UserScreen}
              options={{
                tabBarLabel: "Dashboard",
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = focused ? "person" : "person-outline";

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              }}
            />
          </Tab.Navigator>
        </View>
      </SignedIn>
    </>
  );
}

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};
