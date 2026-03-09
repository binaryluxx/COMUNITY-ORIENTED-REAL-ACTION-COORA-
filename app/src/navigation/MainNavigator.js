import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import NewsScreen from '../screens/NewsScreen';
import ThanksScreen from '../screens/ThanksScreen';
import FriendsScreen from '../screens/FriendsScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main App with Bottom Tabs */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      
      {/* Other Screens that should not have bottom tabs */}
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Thanks" component={ThanksScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
    </Stack.Navigator>
  );
}
