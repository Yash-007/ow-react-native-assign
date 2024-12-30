import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

const NomadsList = () => {
  const [nomads, setNomads] = useState([]);

  useEffect(() => {
    const fetchNomads = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=30');
        const data = await response.json();
        const fetchedNomads = data.results.map((user, index) => ({
          id: String(index + 1),
          name: `@${user.login.username}`,
          followers: `${Math.floor(Math.random() * 500 + 100)}k followers`,
          imageUrl: user.picture.large,
        }));
        setNomads(fetchedNomads);
      } catch (error) {
        console.error('Error fetching nomads:', error);
      }
    };

    fetchNomads();
  }, []);

  return (
    <FlatList
      horizontal
      data={nomads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.followers}>{item.followers}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        alignItems: 'center',
        marginBottom:30,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 120,
      },
      name: {
        marginTop: 8,
        fontSize: 16  ,
        fontWeight: '600',
        color: '#34424A',
      },
      followers: {
        fontSize: 12,
        color: '#8A8A8A',
      },
});

export default NomadsList;
