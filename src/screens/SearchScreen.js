import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';
import Header from '../components/Header';
import HashtagList from '../components/HashtagList';
import CommunityList from '../components/CommunityList';
import NomadsList from '../components/NomadsList';

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.topSearchContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/798/400' }}
          style={styles.topSearchImage}
        />
        <Text style={styles.topSearchText}>#Top search of the day</Text>
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending hashtags</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <HashtagList />
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top community</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <CommunityList />
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top nomads</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <NomadsList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F6FA',
        padding: 10,
        paddingHorizontal: 30,
      },
      topSearchContainer: {
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      },
      topSearchImage: {
        width: '100%',
        height: 200, 
        borderRadius: 10,
      },
      topSearchText: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
      sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 1,
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: '900',
        color: '#71718f',
        letterSpacing: 0.5,
      },
      seeAllText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray', 
        marginTop: 4,
      },
});

export default SearchScreen;
