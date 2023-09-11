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

  if (photo) {
    return <SubmitPhotoScreen photo={photo} setPhoto={setPhoto} />;
  }

  return (
    <OpenCamera
      setPhoto={setPhoto}
      cameraRef={cameraRef}
      navigation={navigation}
    />
  );
}

const OpenCamera = ({ navigation, cameraRef, setPhoto }) => {
  const takePic = async () => {
    let options = {
      quality: 1,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto.uri);
  };

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
};

const SubmitPhotoScreen = ({ photo, setPhoto }) => {
  return (
    <SafeAreaView className="flex items-center space-y-3">
      <Image className=" h-5/6 w-5/6 mt-5" source={{ uri: photo }} />
      <Pressable className="items-center bg-green-500 text-white min-w-[150] px-5 py-3 rounded-md">
        <Text className="text-white">Submit</Text>
      </Pressable>
      <Pressable
        className="items-center border border-green-500 bg-white  px-5 py-3 rounded-md min-w-[150]"
        onPress={() => setPhoto(undefined)}
      >
        <Text className="text-green-500">Try again</Text>
      </Pressable>
    </SafeAreaView>
  );
};
