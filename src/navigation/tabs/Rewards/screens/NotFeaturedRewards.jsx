import { View, TouchableOpacity} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../../utils/constants";
import NotFeaturedRewardCard from "./NotFeaturedRewardCard";

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

export default function NotFeaturedRewards({ navigation }) {
    const [rewards, setRewards] = useState([]);
    const [currentReward, setCurrentReward] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
  
    // const getRewards = () => {
    //   setIsLoading(true);
    //   axios.get(`${API}/rewards/not-featured`).then((res) => {
    //     setRewards([rewards]);
    //   });
    // };
  
    // const loadMoreItem = () => {
    //   setCurrentReward(currentReward + 1);
    // };

    useEffect(()=>{
      axios.get(`${API}/rewards/not-featured`).then((res) => {
        setRewards(res.data)
      })
    }
    ,[])



    return (
        <View className="w-screen pl-1">
          {rewards?.map((item) => {
            return (
              <TouchableOpacity
                className="w-full"
                key={item.id}
                // onPress={() =>
                //   navigation.navigate("RewardShow", {
                //     id: item.id,
                //     image: item.imageUrl,
                //     name: item.name,
                //     spec: item.spec,
                //     category: item.category,
                //     business: item.business,
                //     description: item.description,
                //     price: item.price,
                //     tokenValue: item.tokenValue,
                //   })
                // }
              >
               <NotFeaturedRewardCard item={item}/>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}
