import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#f9fafa]" edges={['top']}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 100 }} 
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="px-6 pt-4 pb-2 flex-row justify-between items-center bg-[#f9fafa]">
          <View className="flex-row items-center gap-3">
            <Image 
              source={{ uri: 'https://ui-avatars.com/api/?name=Rana&background=a7f3d0&color=059669' }} 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <View>
              <Text className="text-lg font-bold text-gray-800 leading-tight">Ranaaa</Text>
              <View className="flex-row items-center gap-1">
                <Text className="text-[11px] font-semibold text-green-500">🛡️ Senior Volunteer</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="relative rounded-full p-2 bg-white border border-gray-100 shadow-sm">
            <Text className="text-xl">🔔</Text>
            <View className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View className="px-6 py-4">
          <Text className="text-[26px] font-bold text-gray-800 leading-[1.1]">
            Hey, <Text className="text-blue-500">Ran!</Text>👋{'\n'}
            Ready to take <Text className="underline decoration-green-400">action</Text>? 🧐
          </Text>
        </View>

        {/* Search Bar */}
        <View className="px-6 pb-6 w-full">
          <View className="relative w-full flex-row items-center bg-white border border-gray-200 rounded-full py-3.5 px-6 shadow-sm">
            <TextInput 
              placeholder="Explore alerts near you"
              className="flex-1 text-sm font-medium text-gray-800 bg-white"
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity className="ml-2">
              <Text className="text-gray-400 text-lg">🔍</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feed List */}
        <View className="px-6 space-y-5">
          {/* Card 1 */}
          <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => navigation.navigate('News')}
            className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm mb-5"
          >
            <View className="relative h-44 overflow-hidden bg-black">
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1542385150-149ab06e78ba?w=800&q=80' }} 
                className="w-full h-full opacity-80"
                style={{ resizeMode: 'cover' }}
              />
              
              <View className="absolute top-4 left-4 z-20 bg-white/30 px-3 py-1.5 rounded-full border border-white/40">
                <Text className="text-white text-xs font-semibold">Natural Disaster</Text>
              </View>
              
              <TouchableOpacity className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/30 rounded-full items-center justify-center border border-white/40">
                <Text className="text-white text-xs">🔖</Text>
              </TouchableOpacity>

              <Text className="absolute bottom-4 left-4 right-4 z-20 text-white font-bold text-lg leading-tight">
                Heavy Rain Triggers Landslide in Bogor, Blocking Access for Residents
              </Text>
            </View>

            <View className="p-4">
              <Text className="text-xs text-gray-500 font-medium mb-3">
                Regional Disaster Management Agency of Bogor Regency 🥇
              </Text>

              <View className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden flex-row">
                <LinearGradient 
                  colors={['#4ade80', '#2dd4bf']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 0 }}
                  style={{ width: '75%', height: '100%', borderRadius: 999 }}
                />
              </View>

              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-bold text-gray-800">Target: $45,000</Text>
                <Text className="text-sm font-bold text-gray-500">75%</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => navigation.navigate('News')}
            className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-sm mb-5"
          >
            <View className="relative h-44 overflow-hidden bg-black">
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800' }} 
                className="w-full h-full opacity-80"
                style={{ resizeMode: 'cover' }}
              />
              
              <View className="absolute top-4 left-4 z-20 bg-white/30 px-3 py-1.5 rounded-full border border-white/40">
                <Text className="text-white text-xs font-semibold">Homeless Assistance</Text>
              </View>
              
              <TouchableOpacity className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/30 rounded-full items-center justify-center border border-white/40">
                <Text className="text-white text-xs">🔖</Text>
              </TouchableOpacity>

              <Text className="absolute bottom-4 left-4 right-4 z-20 text-white font-bold text-lg leading-tight">
                Basic Needs Support for Homeless People in Urban Areas
              </Text>
            </View>

            <View className="p-4">
              <Text className="text-xs text-gray-500 font-medium mb-3">
                Jakarta City Social Services 🥇
              </Text>

              <View className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden flex-row">
                <LinearGradient 
                  colors={['#e879f9', '#4f46e5']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 0 }}
                  style={{ width: '89%', height: '100%', borderRadius: 999 }}
                />
              </View>

              <View className="flex-row justify-between items-center">
                <Text className="text-sm font-bold text-gray-800">Target: $107,000</Text>
                <Text className="text-sm font-bold text-gray-500">89%</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
