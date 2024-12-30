import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.displayText}>Discover the world</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    marginBottom: 25,
  },
  searchBar: {
    backgroundColor: 'white',
    color: 'gray',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
    fontSize: 14,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  displayText: {
    fontSize: 26,
    fontWeight: '900',
    color: '#71718f',
    letterSpacing: 0.5,
  },
});

export default Header;
