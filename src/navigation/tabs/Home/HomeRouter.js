import HomeScreen from "./Screens/HomeScreen";
import ProductShow from "./Screens/ProductShow";
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
    </Stack.Navigator>
  );
}
