import { Pressable, SafeAreaView, Text, Image } from "react-native";

export default function SubmitPhotoScreen({ route, navigation }) {
  const { photo } = route.params;
  return (
    <SafeAreaView className="flex items-center space-y-3">
      <Image className=" h-5/6 w-5/6 mt-5" source={{ uri: photo }} />
      <Pressable
        className="items-center bg-green-500 text-white min-w-[150] px-5 py-3 rounded-md"
        onPress={() => navigation.navigate("Success", { photo: photo })}
      >
        <Text className="text-white">Submit</Text>
      </Pressable>
      <Pressable
        className="items-center border border-green-500 bg-white  px-5 py-3 rounded-md min-w-[150]"
        onPress={() => navigation.navigate("LiveCamera")}
      >
        <Text className="text-green-500">Try again</Text>
      </Pressable>
    </SafeAreaView>
  );
}
