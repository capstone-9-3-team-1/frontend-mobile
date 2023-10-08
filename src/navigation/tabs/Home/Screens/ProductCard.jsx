import { View, Text, Image } from "react-native";

function addBadge(item) {
    let badge = "";
  item.category === "bio" ? badge="https://storage.googleapis.com/atara_images/Biodegradability.png" : null;
  item.category === "energy" ? badge="https://storage.googleapis.com/atara_images/EnergyEfficiency.png" : null;
  item.category === "nontox" ? badge="https://storage.googleapis.com/atara_images/Non-toxic.png" : null;
  item.category === "watercon" ? badge="https://storage.googleapis.com/atara_images/WaterConservation.png" : null;
  item.category === "pack" ? badge="https://storage.googleapis.com/atara_images/MinimalPackaging.png" : null;
  item.category === "sus" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
  item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/SustainableMaterials.png" : null;
  item.category === "carbon" ? badge="https://storage.googleapis.com/atara_images/CarbonFootprint.png" : null;
  item.category === "emision" ? badge="https://storage.googleapis.com/atara_images/ReducedEmissions.png" : null;

    return (
      <Image
        source={{uri: badge}}
        className="h-12 w-12"
      />
    );
  
}

//color bg-[#f3fcf0]

export default function ProductCard({ item }) {

  return (
    <View className="mx-3 my-1" key={item.id}>
      <View className="h-48 w-48 bg-[#f4ffef] border-[1px] border-green-100 items-center justify-center rounded-md">
      <View className="relative bg-white w-44 h-44 ">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="rounded-t-lg h-40"
          resizeMode="contain"
        />
        <View className="absolute bottom-1 right-1">{addBadge(item)}</View>
      </View>

      </View>
     
      <View className="p-3">
        <Text className="font-semibold text-sm">{item.name}</Text>
        <Text>by <Text className="text-green-800">{item.business}</Text></Text>
        <View className="flex-row gap-1">
          <Image
            className="h-4 w-4  bg-white drop-shadow-xl"
            source={require("../../../../assets/AtaraCoin.png")}
          />
          <Text className="">{item.tokenValue}</Text>
        </View>
      </View>
    </View>
  );
}
