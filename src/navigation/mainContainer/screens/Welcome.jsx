import { Button, View, Text, SafeAreaView, Image } from "react-native";

export default function Welcome({ navigation }) {
  //comment
  return (
    <SafeAreaView className="bg-white flex">
      <View className=" h-full  justify-center items-center">
      
        <Image source={require("../../../assets/atara_logo.png")} 
        resizeMode="contain"
        className="h-12 my-3 ml-[-150px]"/>


       

        <View className="mb-20">
          <Text className="text-4xl self-start">Saving the planet</Text>
          <Text className="text-4xl self-start">while saving you</Text>
          <Text className="text-4xl self-start text-green-700">money</Text>
        </View>
        <View className="rounded-xl bg-green-700 w-60 mb-4">
          <Button
            title="Get Started"
            color="white"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
        <View className="rounded-xl border border-green-700 w-60">
          <Button
            title="Sign In"
            color="green"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
