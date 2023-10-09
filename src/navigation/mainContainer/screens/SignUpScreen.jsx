import { useState, useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen({ navigation }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const passwordInput = useRef(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      let signUpResult = await signUp.create({
        email_address: emailAddress,
        password,
        "first_name":"",
        "last_name":""
      });

      console.log("signupresult", signUpResult)
//qihectorzhong@pursuit.org
//20231005@a
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(err);
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
      console.log("complete", completeSignUp)

      await setActive({ session: completeSignUp.createdSessionId });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        // router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SafeAreaView className="bg-green-500">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="w-full flex h-full justify-center items-center"
      >
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
                keyboardType="email-address"
                returnKeyType="next"
                autoFocus={true}
                onSubmitEditing={() => passwordInput.current.focus()}
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
                returnKeyType="done"
                ref={passwordInput}
                onSubmitEditing={onSignUpPress}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
