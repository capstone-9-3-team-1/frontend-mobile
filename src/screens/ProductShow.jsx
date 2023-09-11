import { ScrollView, SafeAreaView, View, Text, Image } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function ProductShow() {
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
              <Text className=" text-2xl font-medium">1 Tokens</Text>
            </View>
            <View className="mt-4 h-5">
              <Svg
                width="64"
                height="64"
                uri="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <Path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
              </Svg>
            </View>
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
