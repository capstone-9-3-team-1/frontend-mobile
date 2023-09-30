import {
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../../../utils/constants";

export default function Articles({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [currentArtilce, setCurrentArticle] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = () => {
    setIsLoading(true);
    axios.get(`${API}/articles`).then((res) => {
      setArticles([...articles, ...res.data]);
    });
  };

  const loadMoreItem = () => {
    setCurrentArticle(currentArtilce + 1);
  };

  useEffect(() => {
    getArticles();
  }, [currentArtilce]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        className="flex-row px-1 py-3 "
        onPress={() =>
          navigation.navigate("ArticleShow", {
            title: item.title,
            imageUrl: item.imageUrl,
            text: item.text,
            link: item.link,
          })
        }
        key={item.id}
      >
        <ArticleCard item={item} />
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View className="text-black items-center justify-center">
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      className="bg-red-300"
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item, i) => i}
      onEndReached={loadMoreItem}
      ListFooterComponent={renderLoader}
      onEndReachedThreshold={0}
      horizontal={true}
    />
  );
}
