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
    <View className="m-2 w-44 border border-gray-200 rounded-2xl" key={item.id}>
      <View className=" relative bg-white rounded-t-2xl">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="rounded-t-lg h-48"
          resizeMode="contain"
        />
        {/* <View className="absolute bottom-1 right-1">{addBadge(item)}</View> */}
      </View>
      <View className="p-3 bg-[#f3fcf0] rounded-b-2xl ">
        <Text className="font-semibold text-sm">{item.name}</Text>
        <View className="flex-row gap-1">
          <Image
            className="h-4 w-4  bg-white drop-shadow-xl"
            source={require("../../../../assets/AtaraCoin.png")}
          />
          <Text className="">{item.tokensAmount}</Text>
        </View>
      </View>
    </View>
  );
}
