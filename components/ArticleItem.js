import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ArticleItem({ article, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10 },
  image: { width: 100, height: 100, borderRadius: 8 },
  content: { flex: 1, marginLeft: 10 },
  title: { fontWeight: 'bold', fontSize: 16 },
  description: { color: 'gray' },
});