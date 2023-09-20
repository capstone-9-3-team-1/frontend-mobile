import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

// Screens
import HomeScreen from "../tabs/Home/Screens/HomeScreen";
import HomeRouter from "../tabs/Home/HomeRouter";
import RewardsScreen from "../tabs/Rewards/RewardsScreen";
import Welcome from "../mainContainer/screens/Welcome";
import SignUpScreen from "../mainContainer/screens/SignUpScreen";
import SignInScreen from "../mainContainer/screens/SignInScreen";
import CameraRouter from "../tabs/Camera/CameraRouter";

export default function MainContainer() {
  return (
    <>
      <SignedOut>
        <Auth />
      </SignedOut>
      <SignedIn>
        <View className="h-full">
          <AppNavigator />
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
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const tabStyle =
    (name) =>
    ({ focused, color, size }) => {
      let iconName = focused ? name : `${name}-outline`;
      return <Ionicons name={iconName} size={size} color={color} />;
    };

  const tabInfo = [
    {
      name: "Home",
      component: HomeRouter,
      tabBarIcon: tabStyle("home"),
      tabBarStyle: {},
    },
    {
      name: "Camera",
      component: CameraRouter,
      tabBarIcon: ({ color, size }) => {
        return (
          <View className=" w-20 h-20 bg-white flex justify-center items-center rounded-full shadow-md">
            <Ionicons name={"camera"} size={size * 1.5} color={color} />
          </View>
        );
      },
      tabBarStyle: { display: "none" },
    },
    {
      name: "Rewards",
      component: RewardsScreen,
      tabBarIcon: tabStyle("gift"),
      tabBarStyle: {},
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
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
      {tabInfo.map(({ name, component, tabBarIcon, tabBarStyle }) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarIcon: tabBarIcon,
            tabBarStyle: tabBarStyle,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
