import HomeScreen from "./Screens/HomeScreen";
import ProductShow from "./Screens/ProductShow";
import CategoryShow from "./Screens/CategoryShow";
import Search from "./Screens/Search";
import ArticleShow from "./Screens/ArticleShow";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeRouter() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductShow" component={ProductShow} />
      <Stack.Screen name="CategoryShow" component={CategoryShow} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ArticleShow" component={ArticleShow} />
    </Stack.Navigator>
  );
}
