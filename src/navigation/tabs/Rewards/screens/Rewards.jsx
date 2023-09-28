import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
} from "react-native";

const rewardsBox = [1, 2, 3, 4];

export default function Rewards() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-screen items-center">
          {rewardsBox.map((num) => (
            <View
              key={num}
              className="flex w-[95%] h-44 bg-blue-200 my-[5px] rounded-3xl"
            >
                <View className="w-1/3">
                <Image source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreativemarket.com%2Fblog%2Fthe-psychology-of-color-behind-5-brilliant-brands&psig=AOvVaw0mqe00XLa0QwEliE0c86Xj&ust=1695508347236000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCODUuv6iv4EDFQAAAAAdAAAAABAE"}}
                 resizeMode="contain"
                />

                </View>
                

              <Text>blue cards</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
