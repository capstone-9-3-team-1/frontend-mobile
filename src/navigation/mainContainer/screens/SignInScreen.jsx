import { useState, useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen({ navigation }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, setActive, isLoaded } = useSignIn();
  const passwordInput = useRef(null);

  const onSignInPress = async () => {
    if (!isLoaded) {
      console.log("loading...");
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView className="bg-green-500">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full flex h-full justify-center items-center"
      >
        <View className="font-medium bg-white min-h-[1/3] w-4/6 rounded-lg shadow-md flex justify-center p-4 space-y-5">
          <TouchableOpacity onPress={() => navigation.push("SignUp")}>
            <Text className="text-blue-500 self-end">Switch to sign-up</Text>
          </TouchableOpacity>

          <Text className="text-3xl self-center">Sign In</Text>

          <View>
            <Text className="text-xl">Email</Text>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              keyboardType="email-address"
              returnKeyType="next"
              autoFocus={true}
              onSubmitEditing={() => passwordInput.current.focus()}
              placeholder="Email..."
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              className="border p-2 rounded border-green-900 "
            />
          </View>

          <View>
            <Text className="text-xl">Password</Text>
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              className="border p-2 rounded border-green-900"
              onChangeText={(password) => setPassword(password)}
              ref={passwordInput}
              onSubmitEditing={onSignInPress}
            />
          </View>

          <TouchableOpacity
            onPress={onSignInPress}
            className="border-white bg-green-600 border flex items-center p-3 rounded-lg"
          >
            <Text className="text-white">Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
