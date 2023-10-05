import { TouchableOpacity, View } from "react-native";
import RewardCard from "./FeaturedRewardCard";
import { useState, useEffect } from "react";
import { API } from "../../../../utils/constants";
import axios from "axios";

export default function Rewards({ navigation }) {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    axios.get(`${API}/rewards/not-featured`).then((res) => {
      setRewards(res.data);
    }, []);
  });

  return (
    <View className="w-screen flex-1 flex-row flex-wrap pl-1 ">
      {rewards?.map((item) => {
        return (
          <TouchableOpacity
            className="w-48"
            key={item.id}
            onPress={() =>
              navigation.navigate("rewardShow", {
                id: item.id,
                image: item.imageUrl,
                name: item.name,
                spec: item.spec,
                category: item.category,
                business: item.business,
                description: item.description,
                price: item.price,
                tokenValue: item.tokenValue,
              })
            }
          >
            <RewardCard item={item} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
