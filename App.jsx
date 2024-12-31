import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, useColorScheme, View, Text, StyleSheet, Image } from 'react-native';
import SearchScreen from './src/screens/SearchScreen'; 

const Tab = createBottomTabNavigator();


const HomeScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>Home Screen</Text>
  </View>
);

const CreateScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>Create Screen</Text>
  </View>
);

const CommunityScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>Community Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>My Profile</Text>
  </View>
);


const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let src;

        if (route.name === 'Home') {
          src = focused
            ? require('./src/assets/focused/home-focused.png')
            : require('./src/assets/normal/home-normal.png');
        } else if (route.name === 'Discover') {
          src = focused
            ? require('./src/assets/focused/search-focused.png')
            : require('./src/assets/normal/search-normal.png');
        } else if (route.name === 'Create') {
          src = focused
            ? require('./src/assets/focused/create-focused.png')
            : require('./src/assets/normal/create-normal.png');
        } else if (route.name === 'Community') {
          src = focused
            ? require('./src/assets/focused/community-focused.png')
            : require('./src/assets/normal/community-normal.png');
        } else if (route.name === 'Me') {
          src = focused
            ? require('./src/assets/focused/profile-focused.png')
            : require('./src/assets/normal/profile-normal.png');
        }

        return (
          <Image
            source={src}
            style={{
              height: size,
              width: size,
              resizeMode: 'center',
            }}
          />
        );
      },
      tabBarActiveTintColor: '#2C89FF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home"component={HomeScreen} />
    <Tab.Screen name="Discover"  component={SearchScreen} />
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Me" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
<NavigationContainer>
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff',
    }}
  >
    <BottomTabNavigator />
  </SafeAreaView>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 30,
    color: 'gray',
    fontWeight:'800'
  },
});

export default App;
