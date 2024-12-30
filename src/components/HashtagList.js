import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

const hashtags = [
    { id: '1', tag: '#travel', views: '2.7m', imageUrl: 'https://picsum.photos/206' },
    { id: '2', tag: '#nature', views: '2.5m', imageUrl: 'https://picsum.photos/201' },
    { id: '3', tag: '#beach', views: '3.1m', imageUrl: 'https://picsum.photos/202' },
    { id: '4', tag: '#sunset', views: '1.8m', imageUrl: 'https://picsum.photos/203' },
    { id: '5', tag: '#wander', views: '4.0m', imageUrl: 'https://picsum.photos/204' },
    { id: '6', tag: '#hiking', views: '2.9m', imageUrl: 'https://picsum.photos/207' },
    { id: '7', tag: '#explore', views: '3.5m', imageUrl: 'https://picsum.photos/208' },
    { id: '8', tag: '#camp', views: '1.2m', imageUrl: 'https://picsum.photos/209' },
    { id: '9', tag: '#advent', views: '2.4m', imageUrl: 'https://picsum.photos/210' },
    { id: '10', tag: '#road', views: '3.8m', imageUrl: 'https://picsum.photos/211' },
    { id: '11', tag: '#trip', views: '4.2m', imageUrl: 'https://picsum.photos/212' },
    { id: '12', tag: '#photo', views: '1.6m', imageUrl: 'https://picsum.photos/213' },
    { id: '13', tag: '#drone', views: '2.1m', imageUrl: 'https://picsum.photos/214' },
    { id: '14', tag: '#water', views: '2.0m', imageUrl: 'https://picsum.photos/215' },
    { id: '15', tag: '#urban', views: '3.3m', imageUrl: 'https://picsum.photos/216' },
    { id: '16', tag: '#food', views: '2.9m', imageUrl: 'https://picsum.photos/217' },
    { id: '17', tag: '#fun', views: '3.7m', imageUrl: 'https://picsum.photos/218' },
    { id: '18', tag: '#green', views: '2.2m', imageUrl: 'https://picsum.photos/219' },
    { id: '19', tag: '#relax', views: '1.9m', imageUrl: 'https://picsum.photos/220' },
    { id: '20', tag: '#peace', views: '3.0m', imageUrl: 'https://picsum.photos/221' },
    { id: '21', tag: '#sport', views: '2.8m', imageUrl: 'https://picsum.photos/222' },
    { id: '22', tag: '#biker', views: '1.7m', imageUrl: 'https://picsum.photos/223' },
    { id: '23', tag: '#waves', views: '4.3m', imageUrl: 'https://picsum.photos/224' },
    { id: '24', tag: '#safari', views: '2.6m', imageUrl: 'https://picsum.photos/225' },
    { id: '25', tag: '#desert', views: '1.5m', imageUrl: 'https://picsum.photos/226' },
    { id: '26', tag: '#mounts', views: '3.4m', imageUrl: 'https://picsum.photos/227' },
    { id: '27', tag: '#summer', views: '2.3m', imageUrl: 'https://picsum.photos/228' },
    { id: '28', tag: '#winter', views: '1.8m', imageUrl: 'https://picsum.photos/229' },
    { id: '29', tag: '#clouds', views: '2.5m', imageUrl: 'https://picsum.photos/230' },
    { id: '30', tag: '#forest', views: '3.9m', imageUrl: 'https://picsum.photos/231' },
];

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
