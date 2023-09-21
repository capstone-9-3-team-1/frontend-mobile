import { View, Text, Button, Image, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import FAQScreen from "./FAQScreen";
import FavoriteItemsScreen from "./FavoriteItemsScreen";

const userName = "John Doe";
const userPoints = 100;

const AccordionList = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  // ^ is UseState even necessary here?
}

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? -1 : index);
};

export default function UserScreen({}) {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* User Profile Pic, Name, Points earned */}
        <View className="flex flex-row items-center m-5">
        <View className="rounded-full bg-white drop-shadow-lg">
              <Image
                source={{
                  uri: "https://media.licdn.com/dms/image/D4E03AQHG9HMxAQd-Rg/profile-displayphoto-shrink_400_400/0/1663609290324?e=1700697600&v=beta&t=29-An9v16nHW_EUNVAwCizVQ7DAhai-Mv8yBndT5C6U",
                }}
                className="w-20 h-20 rounded-full"
              />
            </View>
            <View className="ml-2">
              <Text className="text-2xl font-semibold">{userName}</Text>
              <Text className="text-lg font-semibold">{userPoints} Points</Text>
            </View>
        </View>


          {/* Tabs for Favorites and FAQ */}
          {/* <View className="w-20 h-20">
          <Image source={require(
            // Insert url for Fave Icon
          )}>
          </Image>
          <Image source={require(
            // Insert url for FAQ Icon
          )}>
          </Image>
         </View> */}

      {/* I'm not entirely sure how to make these icons show up on
        the screen and how to make them be pressable buttons.
        I wrote out some of this code tho and i've been trying to
        jigsaw puzzle it all together.*/}

      {/* <TouchableOpacity
        onPress={() => {
          // Navigate to the FAQ screen
          navigation.navigate("FAQScreen");
        }}
      >
        <Icon name="question-circle" size={50} color="blue" />
        <Text>FAQ</Text>
      </TouchableOpacity>
    </View> */}

         {/* Accordion List of stuff */}
         {/* <View>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleAccordion(index)}>
            <View className="flex-row items-center">
              <Text>{item.title}</Text>
              <Text>{activeIndex === index ? " -" : " +"}</Text>
            </View>
          </TouchableOpacity>
          {activeIndex === index && (
            <View>
              <Text>{item.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View> */}

          {/* Sign out */}
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <SignOut />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
}
    

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};
