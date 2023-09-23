 import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

// function addBadge(item) {
//     let badge = "";
//   item.category === "bio" ? badge="https://storage.googleapis.com/atara_images/Biodegradability.png" : null;
//   item.category === "energy" ? badge="https://storage.googleapis.com/atara_images/EnergyEfficiency.png" : null;
//   item.category === "nontox" ? badge="https://storage.googleapis.com/atara_images/Non-toxic.png" : null;
//   item.category === "watercon" ? badge="https://storage.googleapis.com/atara_images/WaterConservation.png" : null;
//   item.category === "pack" ? badge="https://storage.googleapis.com/atara_images/MinimalPackaging.png" : null;
//   item.category === "sus" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
//   item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
//   item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/CarbonFootprint.png" : null;
//   item.category === "emision" ? badge="https://storage.googleapis.com/atara_images/ReducedEmissions.png" : null;

//     return (
//       <Image
//         source={{uri: badge}}
//         className="h-12 w-12"
//       />
//     );
  
// }

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
