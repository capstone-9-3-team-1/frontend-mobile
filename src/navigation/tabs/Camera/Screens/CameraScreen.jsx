import { Camera } from "expo-camera";
import { Button, Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useRef, useState } from "react";

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  let cameraRef = useRef();

  useEffect(() => {
    if (photo) {
      navigation.navigate("SubmitPhotoScreen", { photo: photo });
    }
  }, [photo]);

  const takePic = async () => {
    const newPhoto = await cameraRef.current.takePictureAsync({
      quality: 1, // highest quality 
      exif: false, 
      base64: true,
    });
    setPhoto(`data:image/jpg;base64,${newPhoto.base64}`);
  };

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
