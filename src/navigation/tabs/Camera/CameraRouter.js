import ReceiptUploadScreen from "./Screens/ReceiptUploadScreen";
import SuccessScreen from "./Screens/SuccessScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubmitPhotoScreen from "./Screens/SubmitPhotoScreen";

export default function CameraRouter() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LiveCamera"
    >
      <Stack.Screen name="LiveCamera" component={ReceiptUploadScreen} />
      <Stack.Screen name="SubmitPhotoScreen" component={SubmitPhotoScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
