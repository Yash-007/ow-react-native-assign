import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { hashtags } from '../assets/data';


const HashtagList = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={hashtags}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.views}>{item.views}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 15,
      },
      overlay: {
        position: 'absolute',
        bottom: 10,
        left: 3,
        right: 2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 3,
        borderRadius: 5,
      },
      tag: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
      },
      views: {
        fontSize: 14,
        color: '#DDD',
      },
});

export default HashtagList;
