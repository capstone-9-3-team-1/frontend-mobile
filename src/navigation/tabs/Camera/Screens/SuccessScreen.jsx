import { SafeAreaView, ActivityIndicator } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { useState, useEffect } from "react";
import ReceiptSummaryPage from "../../../../screens/CameraSuccess";
export default function SuccessScreen({ navigation }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowLoading(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const navigateAfterSummary = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }, { name: "Rewards" }],
      })
    );
  };

  return (
    <SafeAreaView>
      {showLoading ? (
        <SafeAreaView className="h-full flex justify-center items-center">
          <ActivityIndicator size="large"></ActivityIndicator>
        </SafeAreaView>
      ) : (
        <>
          <ReceiptSummaryPage navigateFn={navigateAfterSummary} />
        </>
      )}
    </SafeAreaView>
  );
}
