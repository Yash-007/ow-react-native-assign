import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { communities } from '../assets/data';


const CommunityList = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={communities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.posts}>{item.posts}</Text>
            <Text style={styles.title}>
              {item.title.split(' ').slice(0, -1).join(' ')}
              {'\n'}
              <Text style={styles.titleBold}>
                {item.title.split(' ').slice(-1)}
              </Text>
            </Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    card: {
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 10,
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      posts: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'flex-end',
      },
      title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'left',
      },
      titleBold: {
        fontSize: 30,
        fontWeight: '800',
        textTransform: 'uppercase',
      },
});

export default CommunityList;
