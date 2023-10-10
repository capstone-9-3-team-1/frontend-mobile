 import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";


export default function CategoryShow({ route, navigation }) {
  const {
    id,
    image,
    name,
    description
  } = route.params;
  
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="m-10 h-screen">
        <View className="flex flex-row items-center text-left">
        <Image 
            resizeMode="contain"
            className="h-12 w-12"
          /> 
        <Text className="text-slate-600 text-3xl p-5">{name}</Text> 

        </View>
          
        <Text>{description}</Text>
        </View>   
    </ScrollView>
  </SafeAreaView>
  );
}
