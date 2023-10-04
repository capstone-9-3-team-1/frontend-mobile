import { SafeAreaView, ActivityIndicator, Text } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { useState, useEffect } from "react";
import ReceiptSummaryPage from "../../../../screens/CameraSuccess";
import useCreateReceipt from "../../../../utils/hooks/mutations/useCreateReceipt";

export default function SuccessScreen({ route, navigation }) {
  const { photo } = route.params;
  const { newRecieptIsLoading, newRecieptIsError, data, mutate, error } =
    useCreateReceipt();

  useEffect(() => {
    mutate(photo);
  }, [photo]);

  const navigateAfterSummary = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }, { name: "Rewards" }],
      })
    );
  };

  if (!newRecieptIsLoading && data) {
    console.log(data);
  }

  return (
    <SafeAreaView>
      {newRecieptIsLoading ? (
        <SafeAreaView className="h-full flex justify-center items-center">
          <ActivityIndicator size="large"></ActivityIndicator>
        </SafeAreaView>
      ) : (
        <>
          {newRecieptIsError ? (
            <Text>Error!</Text>
          ) : (
            <ReceiptSummaryPage
              newRecieptData={data}
              navigateFn={navigateAfterSummary}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}
