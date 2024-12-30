import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, useColorScheme, View, Text, StyleSheet, Image } from 'react-native';
import SearchScreen from './src/screens/SearchScreen'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const PlaceholderScreen = ({ title }) => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>{title}</Text>
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
    <Tab.Screen name="Home"component={SearchScreen} />
    <Tab.Screen name="Discover"  component={() => <PlaceholderScreen title="Discover Screen" />} />
    <Tab.Screen name="Create" component={() => <PlaceholderScreen title="Create Screen" />} />
    <Tab.Screen name="Community" component={() => <PlaceholderScreen title="Community Screen" />} />
    <Tab.Screen name="Me" component={() => <PlaceholderScreen title="My Profile" />} />
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
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen
            name="MainTabs"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
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
    fontSize: 20,
    color: 'gray',
  },
});

export default App;
