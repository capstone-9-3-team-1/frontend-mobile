import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen({ navigation }) {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView className="bg-green-500 h-full flex justify-center items-center">
      {!pendingVerification && (
        <View className="font-medium bg-white min-h-[1/3] w-4/6 rounded-lg shadow-md flex justify-center p-4 space-y-5">
          <TouchableOpacity onPress={() => navigation.push("SignIn")}>
            <Text className="text-blue-500 self-end">Switch to sign-in</Text>
          </TouchableOpacity>

          <Text className="text-3xl self-center">Sign Up</Text>
          <View>
            <Text className="text-xl">Email</Text>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
              className="border p-2 rounded border-green-900 "
            />
          </View>

          <View>
            <Text className="text-xl">Password</Text>
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              className="border p-2 rounded border-green-900 "
            />
          </View>

          <TouchableOpacity
            onPress={onSignUpPress}
            className="border-white bg-green-600 border flex items-center p-3 rounded-lg"
          >
            <Text className="text-white">Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View className="font-medium bg-white h-1/3 w-4/6 rounded-lg shadow-md flex justify-center p-4 space-y-5">
          <Text>Check your email for a verification code</Text>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
              className="border p-2 rounded border-green-900 "
            />
          </View>
          <TouchableOpacity
            onPress={onPressVerify}
            className="border-white bg-green-600 border flex items-center p-3 rounded-lg"
          >
            <Text className="text-white">Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
