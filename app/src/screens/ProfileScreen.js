import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View className="px-6 py-4 flex-row justify-between items-center bg-white z-40">
          <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 h-10 items-center justify-center">
            <Text className="text-2xl text-gray-600">‹</Text>
          </TouchableOpacity>
          <Text className="text-xl font-bold text-green-700">Your Profile</Text>
          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Text className="text-xl text-gray-500">⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Banner & Avatar Cover */}
        <View className="relative h-32 w-full overflow-hidden">
          <View className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1541450805202-3e15f8d95123?w=800&q=80' }} 
            className="w-full h-full opacity-80"
            style={{ resizeMode: 'cover' }}
          />
        </View>

        {/* Avatar & Info Box */}
        <View className="relative px-6 -mt-16 z-20 items-center">
          <View className="relative inline-block rounded-full p-1 bg-yellow-300 shadow-md">
            <Image 
              source={{ uri: 'https://ui-avatars.com/api/?name=Rana&background=a7f3d0&color=059669' }} 
              className="w-[90px] h-[90px] rounded-full border-4 border-white"
            />
          </View>
          <Text className="mt-2 text-[22px] font-bold text-green-700 underline decoration-green-300">
            Rana At'thariq
          </Text>

          {/* Badges Box container (Simulating Marquee for now with a ScrollView) */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-full mt-4 flex-row pt-1 pb-2" contentContainerStyle={{ paddingHorizontal: 16 }}>
            <View className="bg-indigo-100 px-3 py-1.5 rounded-full mr-2 shadow-sm">
              <Text className="text-indigo-600 text-[11px] font-bold">Humanity 🫂</Text>
            </View>
            <View className="bg-green-100 px-3 py-1.5 rounded-full mr-2 shadow-sm">
              <Text className="text-green-700 text-[11px] font-bold">Senior Volunteer 🥇</Text>
            </View>
            <View className="bg-pink-100 px-3 py-1.5 rounded-full shadow-sm mr-2">
              <Text className="text-pink-700 text-[11px] font-bold">Active Donator 💸</Text>
            </View>
            <View className="bg-indigo-100 px-3 py-1.5 rounded-full shadow-sm mr-2">
              <Text className="text-indigo-600 text-[11px] font-bold">First Responder 🚑</Text>
            </View>
          </ScrollView>
        </View>

        {/* Stats Section */}
        <View className="px-6 mt-4 flex-row gap-3">
          <View className="flex-1 bg-green-50 border border-green-100 rounded-[14px] p-4 items-center justify-center shadow-sm">
            <Text className="text-2xl font-bold text-green-400">$364</Text>
            <Text className="text-[10px] font-bold text-gray-400 tracking-wide mt-1 uppercase text-center">Total{'\n'}Donations</Text>
          </View>
          <View className="flex-1 bg-green-50 border border-green-100 rounded-[14px] p-4 items-center justify-center shadow-sm">
            <Text className="text-2xl font-bold text-green-400">24</Text>
            <Text className="text-[10px] font-bold text-gray-400 tracking-wide mt-1 uppercase text-center">Volunteer{'\n'}Hours</Text>
          </View>
          <View className="flex-1 bg-green-50 border border-green-100 rounded-[14px] p-4 items-center justify-center shadow-sm">
            <Text className="text-2xl font-bold text-green-400">37</Text>
            <Text className="text-[10px] font-bold text-gray-400 tracking-wide mt-1 uppercase text-center">Streak{'\n'} </Text>
          </View>
        </View>

        {/* Feedback & Mails */}
        <View className="px-6 mt-6">
          <View className="flex-row items-center gap-2 mb-3">
            <Text className="text-sm font-bold text-gray-500">Feedback</Text>
            <View className="bg-gray-200 h-[1px] flex-1" />
          </View>
          
          <View className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-4 relative overflow-hidden h-36">
            <View className="absolute -right-8 -top-8 w-24 h-24 bg-pink-300 rounded-full opacity-30" />
            <View className="absolute -left-8 -bottom-8 w-24 h-24 bg-blue-300 rounded-full opacity-30" />
            
            <View className="absolute top-2 left-2 bg-green-100 px-2 py-1 rounded-md border border-green-200 transform -rotate-3 z-10 shadow-sm">
              <Text className="text-green-700 text-[10px] font-bold">Dihormati! 🚀</Text>
            </View>
            
            <View className="absolute left-4 bottom-4 z-20 transition-transform">
              <TouchableOpacity onPress={() => navigation.navigate('Thanks')} className="flex-row items-center gap-1 bg-green-400 py-2.5 px-5 rounded-full shadow-md">
                <Text className="text-white font-bold text-xs">View More</Text>
                <Text className="text-white font-bold text-xs">→</Text>
              </TouchableOpacity>
            </View>

            <View className="absolute right-4 top-1/2 -translate-y-1/2 bg-fuchsia-500 px-2 py-1.5 rounded-l-md rounded-r-xl z-10 shadow-sm">
              <Text className="text-white text-[10px] font-bold">Wow! 🤩 Pen...</Text>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="px-6 mt-6 space-y-3">
          <View className="flex-row items-center gap-2 mb-1">
            <Text className="text-sm font-bold text-gray-500">Recent Activity</Text>
            <View className="bg-gray-200 h-[1px] flex-1" />
          </View>

          <View className="bg-white border border-gray-200 rounded-2xl p-3 flex-row justify-between items-center shadow-sm overflow-hidden mb-3">
            <View className="absolute left-0 top-0 bottom-0 w-12 bg-green-50" />
            <View className="relative z-10">
              <Text className="text-[11px] text-gray-400 font-medium mb-1">Recent Donation • 12 Feb</Text>
              <Text className="font-bold text-gray-800 text-[15px] leading-tight mb-2">Jakarta Flood Relief</Text>
              <View className="bg-green-100 px-3 py-0.5 rounded-full self-start">
                <Text className="text-green-700 text-xs font-bold">$50</Text>
              </View>
            </View>
            <Image source={{uri: 'https://images.unsplash.com/photo-1542385150-149ab06e78ba?w=200&q=80'}} className="w-[60px] h-[50px] rounded-lg z-10" />
          </View>

          <View className="bg-white border border-gray-200 rounded-2xl p-3 flex-row justify-between items-center shadow-sm overflow-hidden mb-3">
             <View className="absolute left-0 top-0 bottom-0 w-12 bg-green-50" />
             <View className="relative z-10">
               <Text className="text-[11px] text-gray-400 font-medium mb-1">Recent Donation • 6 Feb</Text>
               <Text className="font-bold text-gray-800 text-[15px] leading-tight mb-2">Gerakan Ombak Bersih</Text>
               <View className="bg-green-100 px-3 py-0.5 rounded-full self-start">
                 <Text className="text-green-700 text-xs font-bold">$50</Text>
               </View>
             </View>
             <Image source={{uri: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=200&q=80'}} className="w-[60px] h-[50px] rounded-lg z-10" />
           </View>
        </View>

        {/* Action Buttons Grid */}
        <View className="px-6 mt-5 flex-row flex-wrap justify-between gap-y-3">
          <TouchableOpacity className="w-[48%] bg-[#5c725c] py-3 rounded-xl items-center justify-center flex-row gap-2 shadow-sm">
            <Text className="text-white text-sm font-semibold">📋 Donations History</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-[48%] bg-white border-2 border-[#5c725c] py-3 rounded-xl items-center justify-center flex-row gap-2">
            <Text className="text-[#5c725c] text-sm font-semibold">📍 Real Action</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full bg-white border-2 border-gray-800 py-3 rounded-xl items-center justify-center flex-row gap-2 cursor-pointer">
            <Text className="text-gray-800 text-sm font-bold">🕶️ Incognito Mode</Text>
          </TouchableOpacity>
        </View>

        {/* Other Menus */}
        <View className="px-6 mt-8 mb-6">
          <View className="flex-row items-center gap-2 mb-4">
            <Text className="text-sm font-bold text-gray-500">Other Menus</Text>
            <View className="h-[1px] bg-gray-200 flex-1" />
          </View>
          
          <View className="bg-[#fbfcfa] rounded-[20px] p-2">
            <TouchableOpacity className="px-4 py-3.5 border-b border-[#f0f4f1]">
              <Text className="text-[15px] font-bold text-[#8fa792]">Privacy Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3.5 border-b border-[#f0f4f1]">
              <Text className="text-[15px] font-bold text-[#8fa792]">Manage Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3.5 border-b border-[#f0f4f1]">
              <Text className="text-[15px] font-bold text-[#8fa792]">Personalize Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MapTab')} className="px-4 py-3.5 border-b border-[#f0f4f1]">
              <Text className="text-[15px] font-bold text-green-600">Nearest disasters</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-3.5">
              <Text className="text-[15px] font-bold text-[#8fa792]">Help & Frequently Asked Questions</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
