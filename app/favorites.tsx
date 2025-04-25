import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewsCard from '../components/NewsCard';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await AsyncStorage.getItem('favorites');
      if (data) {
        setFavorites(JSON.parse(data));
      }
    };
    loadFavorites(); 
  }, []); 

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>⭐ Избранное</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsCard news={item} />}
        ListEmptyComponent={<Text>Пока нет избранных новостей.</Text>}
      />
    </View>
  );
}
