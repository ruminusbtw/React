import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NewsCard({ news }: any) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/${news.id}`)}>
      <View style={{ marginBottom: 15, backgroundColor: '#fff', padding: 10, borderRadius: 8 }}>
        <Image source={{ uri: news.image }} style={{ height: 200, borderRadius: 8 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{news.title}</Text>
        <Text>{news.summary}</Text>
      </View>
    </TouchableOpacity>
  );
}