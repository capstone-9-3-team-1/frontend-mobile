import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
export default function SuccessScreen({ navigation }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowLoading(false), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <SafeAreaView>
      {showLoading ? (
        <SafeAreaView className="">
          <ActivityIndicator></ActivityIndicator>
        </SafeAreaView>
      ) : (
        <>
          <Text>Back</Text>
          <Text>This is where the sucess screen will go!</Text>
        </>
      )}
      <Pressable onPress={() => navigation.navigate("LiveCamera")}></Pressable>
    </SafeAreaView>
  );
}
