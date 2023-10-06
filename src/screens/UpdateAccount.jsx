import { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
//import { useUser } from "@clerk/clerk-expo";
import { useUser } from "@clerk/clerk-react";


const UpdateAccount = ({ navigation }) => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);


    const onSaveUser = async () => {
   
        await user.update({
          firstName: firstName,
          lastName: lastName,
        });
      };
  


  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Ionicons name="arrow-back" size={20}/> 
      </TouchableOpacity>
        
      <View>
        <Text className="text-xl font-bold mx-auto TextInput-slate-700">
          Update Account
        </Text>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 mx-4 my-5"
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 mx-4 my-5"
        />
        <Button
          onPress={onSaveUser}
          title="Update account"
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default UpdateAccount;
