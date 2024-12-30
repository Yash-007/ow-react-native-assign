import React from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

const communities = [
    { id: '1', title: 'Places of FRANCE', posts: '125posts/day', imageUrl: 'https://picsum.photos/218' },
    { id: '2', title: 'We live in ITALY', posts: '75posts/day', imageUrl: 'https://picsum.photos/219' },
    { id: '3', title: 'Explore SPAIN', posts: '60posts/day', imageUrl: 'https://picsum.photos/217' },
    { id: '4', title: 'Discover GREECE', posts: '90posts/day', imageUrl: 'https://picsum.photos/220' },
    { id: '5', title: 'Visit GERMANY', posts: '110posts/day', imageUrl: 'https://picsum.photos/221' },
    { id: '6', title: 'Tour JAPAN', posts: '140posts/day', imageUrl: 'https://picsum.photos/222' },
    { id: '7', title: 'Love INDIA', posts: '200posts/day', imageUrl: 'https://picsum.photos/223' },
    { id: '8', title: 'Charming THAILAND', posts: '85posts/day', imageUrl: 'https://picsum.photos/224' },
    { id: '9', title: 'Beautiful BRAZIL', posts: '100posts/day', imageUrl: 'https://picsum.photos/225' },
    { id: '10', title: 'Adore JAPAN', posts: '70posts/day', imageUrl: 'https://picsum.photos/226' },
    { id: '11', title: 'Journey to CANADA', posts: '95posts/day', imageUrl: 'https://picsum.photos/227' },
    { id: '12', title: 'Exp AUSTRALIA', posts: '150posts/day', imageUrl: 'https://picsum.photos/228' },
    { id: '13', title: 'Amazing SOUTH AFRICA', posts: '80posts/day', imageUrl: 'https://picsum.photos/229' },
    { id: '14', title: 'Hii USA', posts: '190posts/day', imageUrl: 'https://picsum.photos/230' },
    { id: '15', title: 'Mesmer EGYPT', posts: '65posts/day', imageUrl: 'https://picsum.photos/231' },
    { id: '16', title: 'Explore PORTUGAL', posts: '120posts/day', imageUrl: 'https://picsum.photos/232' },
    { id: '17', title: 'Visit MALDIVES', posts: '105posts/day', imageUrl: 'https://picsum.photos/233' },
    { id: '18', title: 'Discover NEPAL', posts: '75posts/day', imageUrl: 'https://picsum.photos/234' },
    { id: '19', title: 'Adventures in BHUTAN', posts: '80posts/day', imageUrl: 'https://picsum.photos/235' },
    { id: '20', title: 'Enjoy POLAND', posts: '95posts/day', imageUrl: 'https://picsum.photos/236' },
    { id: '21', title: 'Live in SWEDEN', posts: '60posts/day', imageUrl: 'https://picsum.photos/237' },
    { id: '22', title: 'Chill in FINLAND', posts: '75posts/day', imageUrl: 'https://picsum.photos/238' },
    { id: '23', title: 'See NORWAY', posts: '85posts/day', imageUrl: 'https://picsum.photos/239' },
    { id: '24', title: 'Travel SWITZER', posts: '140posts/day', imageUrl: 'https://picsum.photos/240' },
    { id: '25', title: 'Explore ICELAND', posts: '90posts/day', imageUrl: 'https://picsum.photos/241' },
    { id: '26', title: 'Enjoy CROATIA', posts: '70posts/day', imageUrl: 'https://picsum.photos/242' },
    { id: '27', title: 'Experience TURKEY', posts: '80posts/day', imageUrl: 'https://picsum.photos/243' },
    { id: '28', title: 'Wonders of EGYPT', posts: '100posts/day', imageUrl: 'https://picsum.photos/244' },
    { id: '29', title: 'Explore MOROCCO', posts: '110posts/day', imageUrl: 'https://picsum.photos/245' },
    { id: '30', title: 'Advent in PERU', posts: '125posts/day', imageUrl: 'https://picsum.photos/246' },
];

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
