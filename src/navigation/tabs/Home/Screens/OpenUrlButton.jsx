import { useCallback } from "react";
import { Button, Linking } from "react-native";

export default function OpenURLButton({url, children}){
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);  
    return <Button title={children} onPress={handlePress}/>;
  };
  