import { View, Text, Image } from "react-native";

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

export default function NotFeaturedRewardCard({ item }) {

  return (
    <View className="mx-4 my-[5px] h-40 bg-white  flex flex-wrap rounded-md drop-shadow-xl border-[1px] border-green-100" key={item.id}>
      <View className="w-36 my-auto ml-2 bg-white drop-shadow-xl">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="h-36"
          resizeMode="contain"
        />
      </View>
      <View className="ml-3 my-auto">
      <Text className="text-bold text-slate-800 text-lg my-3">{item.name}</Text>
        <View className="flex-row gap-1">
          <Image
            className="h-6 w-6  bg-white drop-shadow-xl"
            source={require("../../../../assets/AtaraCoin.png")}
          />
          <Text className="text-bold text-lg">{item.tokensAmount}</Text>
        </View>
      </View>
    </View>
  );
}
