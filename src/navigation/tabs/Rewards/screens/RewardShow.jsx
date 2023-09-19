import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
} from "react-native";

export default function RewardShow() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="m-10 flex h-screen items-center">
          <Image
            style={{
              width: 350,
              height: 400,
            }}
            source={{
              uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
            }}
          />
          <View className="flex-row my-6 ">
            <View className="self-start flex-1 space-y-1">
              <Text className=" text-3xl font-semibold ">Product Title</Text>
              <Text className=" text-2xl font-medium">0 Tokens</Text>
            </View>
            <View className="">
              <Text>❤️</Text>
            </View>
          </View>
          <View className=" bg-green-600 rounded text-white w-full mb-5">
            <Button title="Redeem" color="white" />
          </View>
          <Text className="text-lg">
            Si ergo illa tantum fastidium compesce contra naturalem usum habili,
            quem habetis vestra potestate, non aliud quam aversantur incurrere.
            Sed si ipse aversaris, ad languorem: et mors, paupertas et tu
            miseros fore. Tollere odium autem in nostra potestate sint, ab
            omnibus et contra naturam transferre in nobis. Sed interim toto
            desiderio supprimunt: si vis aliqua quae in manu tua tibi necesse
            confundentur et quae, quod laudabile esset, nihil tamen possides.
            Oportet uti solum de actibus
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
