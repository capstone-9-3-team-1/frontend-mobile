import { View, Text, TextInput, SafeAreaView, ScrollView } from "react-native";
// import { userName } from 

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const articleBox= [1, 2, 3, 4];
const products= [1, 2, 3, 4, 5, 6];

export default function RewardsScreen({ navigation }) {
  return <SafeAreaView className="flex items-start">
    <ScrollView>
    {/* User Circle, Name, and Rewards History Button*/}
      
    <View className="flex flex-row items-center m-5">
        <View className="w-20 h-20 rounded-full ml-5 bg-blue-500"></View>
          <TextInput className="text-2xl font-semibold items-center"> John Doe</TextInput> 
          {/* <TextInput className="text-lg">Your Rewards{userPoints}</TextInput> */}
      {/* </View>  */}
      </View>
      {/* </View> */}

    {/* top categories */}
    <Text className= "text-2xl font-semibold">  Top Categories</Text>
    <ScrollView horizontal>
      {array.map(() =>  <View className="border p-16 rounded-full m-5"></View>)}
    </ScrollView>

    {/* rectangle boxes- Is this necessary here? */}
    <ScrollView horizontal>
      {articleBox.map(() =>  <View className="border flex box-content h-56 w-80 m-2">
        <TextInput placeholder="text"></TextInput>
        </View>)}
    </ScrollView>

    {/* New Rewards */}
    <Text className= "text-2xl font-semibold">  New Rewards</Text>
    <View className="flex-row w-screen flex-wrap m-1">
      {products.map(() => <View className="border flex box-content h-44 w-44 m-2 "></View>)}
    </View>
    </ScrollView>
  </SafeAreaView>
}
