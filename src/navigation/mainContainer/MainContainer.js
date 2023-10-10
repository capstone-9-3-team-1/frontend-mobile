import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

// Screens
import HomeRouter from "../tabs/Home/HomeRouter";
import RewardsScreen from "../tabs/Rewards/RewardsScreen";
import Welcome from "../mainContainer/screens/Welcome";
import SignUpScreen from "../mainContainer/screens/SignUpScreen";
import SignInScreen from "../mainContainer/screens/SignInScreen";
import CameraRouter from "../tabs/Camera/CameraRouter";
import UserScreen from "../../screens/UserScreen";
import UpdateAccount from "../../screens/UpdateAccount";

export default function MainContainer() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SignedOut>
        <Auth stack={Stack} />
      </SignedOut>
      <SignedIn>
        <View className="h-full">
          <AppNavigator stack={Stack} />
        </View>
      </SignedIn>
    </>
  );
}

const Auth = ({ stack }) => {
  const Stack = stack;
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

const AppNavigator = ({ stack }) => {
  const Stack = stack;
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={TabNav} />
        <Stack.Screen name="Profile" component={UserScreen} />
        <Stack.Screen name="UpdateAccount" component={UpdateAccount} />

      </Stack.Navigator>
    </>
  );
};

const TabNav = () => {
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
            <Ionicons name={"receipt"} size={size * 1.5} color={"#00D062"} />
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
        tabBarActiveTintColor: "#a2daff",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontSize: 11,
        },
        headerShown: false,
      }}
    >
      {tabInfo.map(({ name, component, tabBarIcon, tabBarStyle }) => (
        <Tab.Screen
          key={name}
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
