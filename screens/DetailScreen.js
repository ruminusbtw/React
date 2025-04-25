import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, Button } from 'react-native';

export default function DetailScreen({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content || 'No content available'}</Text>
      <Button title="Читать полностью" onPress={() => Linking.openURL(article.url)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  content: { fontSize: 16, marginBottom: 10 },
});
