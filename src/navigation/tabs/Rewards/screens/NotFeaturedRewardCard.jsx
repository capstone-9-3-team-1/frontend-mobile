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

  const  addNewLineAfterThirdWord = (inputString) => {
    const words = inputString.split(' ');
    if (words.length >= 3) {
      words.splice(3, 0, '\n'); 
      return words.join(' ');
    }
    return inputString;
  }
  
  return (
    <View
      className="mx-4 my-[5px] h-40 bg-white  flex flex-wrap rounded-md drop-shadow-xl border-[1px] border-green-100"
      key={item.id}
    >
      <View className="w-36 my-auto ml-2 bg-white drop-shadow-xl">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="h-36"
          resizeMode="contain"
        />
      </View>
      <View className="ml-3 my-auto h-fit">
        <Text className="font-bold text-green-800 ">{item.business}</Text>    
          <Text className="text-bold text-slate-800 text-lg my-1">
            {addNewLineAfterThirdWord(item.name)}
          </Text>
          <View className="flex-row gap-1 ">
            <Image
              className="h-5 w-5  bg-white drop-shadow-xl"
              source={require("../../../../assets/AtaraCoin.png")}
            />
            <Text className="text-bold text-md pt-0.5">{item.tokensAmount}</Text>
          </View>
      </View>
    </View>
  );
}
