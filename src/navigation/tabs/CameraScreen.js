import { Camera } from "expo-camera";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRef, useState } from "react";

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState();
  let cameraRef = useRef();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          color={"black"}
          onPress={requestPermission}
          title="Grant permission"
        />
      </View>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    console.log(newPhoto);
    setPhoto(newPhoto);
  };

  if (photo) {
    return (
      <SafeAreaView>
        <Image
          className="flex-1 self-stretch"
          source={{ uri: photo.uri + photo.base64 }}
        />
        <Pressable
          className="items-center"
          title="Discard"
          onPress={() => setPhoto(undefined)}
        >
          <Text>Disgard</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <View>
      <Camera
        className="h-full flex justify-start w-full items-center"
        ref={cameraRef}
      >
        <Pressable
          className="self-start mt-16 ml-5 "
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={"close-outline"} size={50} color={"white"} />
        </Pressable>
        <View className="flex-1"></View>
        <Pressable
          className=" rounded-full p-5 mb-20 bg-white bg-opacity-50"
          onPress={takePic}
        >
          <Ionicons name={"camera"} size={50} color={"black"} />
        </Pressable>
      </Camera>
    </View>
  );
}
