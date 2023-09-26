 import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";


export default function CategoryShow({ route, navigation }) {
  const {
    id,
    image,
    name,
    description
  } = route.params;
  
  console.log(name)
  
  return (
    <SafeAreaView>
    <ScrollView>
      <View className="m-10 flex h-screen items-center">
          <Image
            style={{
              width: 350,
              height: 400,
            }}
            source={{
              uri: image,
            }}
            resizeMode="contain"
            className=""
          /> 
        <Text className="text-slate-600 text-3xl p-5">{name}</Text> 
        <Text>{description}</Text>
        </View>   
    </ScrollView>
  </SafeAreaView>
  );
}
