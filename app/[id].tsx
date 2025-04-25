import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, Button, ScrollView, Alert } from 'react-native';
import newsData from '../data/news.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewsDetail() {
  const { id } = useLocalSearchParams();
  const newsItem = newsData.find((item) => item.id === id);

  const addToFavorites = async () => {
    try {
      const existing = await AsyncStorage.getItem('favorites');
      const favorites = existing ? JSON.parse(existing) : [];
      const alreadyInFavorites = favorites.some((item) => String(item.id) === String(newsItem.id));


      if (!alreadyInFavorites) {
        favorites.push(newsItem);
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        Alert.alert('✅ Успешно', 'Добавлено в избранное!');
      } else {
        Alert.alert('ℹ️ Уже добавлено', 'Эта новость уже в избранном.');
      }
    } catch (e) {
      Alert.alert('❌ Ошибка', 'Не удалось добавить в избранное');
    }
  };

  if (!newsItem) return <Text>Новость не найдена.</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image source={{ uri: newsItem.image }} style={{ height: 200, borderRadius: 8 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{newsItem.title}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{newsItem.content}</Text>
      <Button title="⭐ В избранное" onPress={addToFavorites} />
    </ScrollView>
  );
}
