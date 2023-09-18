import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import useTempHook from "../../../hooks/useTempHook";

export default function SuccessScreen({ navigation }) {
  const [showLoading, setShowLoading] = useState(true);

  // useEffect(() => {
  //   let timer1 = setTimeout(() => setShowLoading(false), 3000);

  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  return (
    <SafeAreaView>
      {showLoading ? (
        <SafeAreaView className="">
          <ActivityIndicator></ActivityIndicator>
        </SafeAreaView>
      ) : (
        <>
          <Text>no</Text>
          <Text>Back</Text>
        </>
      )}
      <Pressable onPress={() => navigation.navigate("LiveCamera")}></Pressable>
    </SafeAreaView>
  );
}
