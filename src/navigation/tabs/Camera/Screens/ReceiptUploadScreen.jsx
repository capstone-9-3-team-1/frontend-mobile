import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ExpoDocumentPicker from "expo-document-picker";
import { useState, useEffect } from "react";
import { manipulateAsync } from "expo-image-manipulator";

export default function ReceiptUploadScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // const launchImageLibrary = () => {
  //  ImagePicker.launchImageLibrary(
  //   options,
  //   (response) => {
  //     if(!response.didCancel && !response.error) {
  //       setSelectedImage({uri:response.uri});
  //     }
  //   }
  //  )

  // };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required.");
      }
    })();
  }, []);

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // })
    let result = await ExpoDocumentPicker.getDocumentAsync();

    if (!result.canceled) {
      // const compressedResult = await manipulateAsync(result.uri, [], {compress: 0.4, base64: true})
      let imageUri = result.assets[0].uri || null;
      const imageResponse = await fetch(imageUri);
      const imageBlob = await imageResponse.blob();
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(imageBlob);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      {selectedImage && (
        <Pressable
          className="items-center bg-green-500 text-white min-w-[150] px-5 py-3 rounded-md"
          onPress={() =>
            navigation.navigate("Success", { photo: selectedImage })
          }
        >
          <Text className="text-white">Submit</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginTop: 20,
  },
});
