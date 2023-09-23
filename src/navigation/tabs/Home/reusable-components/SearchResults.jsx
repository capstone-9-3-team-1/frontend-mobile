import { View, Text } from 'react-native';

const SearchResults = ({ results }) => {
  return (
    <View>
      {results.map((result, index) => (
        <Text key={index}>{result.name}</Text>
      ))}
    </View>
  );
};

export default SearchResults;
