import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import AddRequestScreen from '../screens/AddRequestScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// Custom Center Button Component
const CustomCenterButton = ({ children, onPress }) => (
  <View style={styles.centerButtonContainer}>
    <View style={styles.centerButtonCutout}>
      <TouchableOpacity
        style={styles.centerButton}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 80,
          paddingBottom: 25,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
        tabBarActiveTintColor: '#22c55e',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="MapTab" 
        component={MapScreen} 
        options={{ tabBarLabel: 'Maps' }}
      />
      <Tab.Screen 
        name="AddRequestTab" 
        component={AddRequestScreen} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => null,
          tabBarButton: (props) => (
            <CustomCenterButton {...props} />
          )
        }}
      />
      <Tab.Screen 
        name="LeaderboardTab" 
        component={LeaderboardScreen} 
        options={{ tabBarLabel: 'Leaderboard' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  centerButtonContainer: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  centerButtonCutout: {
    width: 84,
    height: 84,
    backgroundColor: '#f9fafa',
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 5,
  }
});
