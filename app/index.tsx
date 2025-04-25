import { View, Text, FlatList } from 'react-native';
import newsData from '../data/news.json';
import NewsCard from '../components/NewsCard';

export default function HomeScreen() {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard news={item} />}
      />
    </View>
  );
}