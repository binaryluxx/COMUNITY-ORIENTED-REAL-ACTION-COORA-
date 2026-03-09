import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const podiumData = [
  { rank: 2, height: 60, color: ['#93c5fd', '#3b82f6'], icon: '🥈' },
  { rank: 1, height: 80, color: ['#60a5fa', '#2563eb'], icon: '👑' },
  { rank: 3, height: 50, color: ['#93c5fd', '#60a5fa'], icon: '🥉' },
];

const leaderboardData = [
  { rank: 1, name: 'MyHibiol', country: '🇩🇪', amount: '1653 $', avatar: 'https://ui-avatars.com/api/?name=M&background=cbd5e1&color=fff', badgeColor: '#fef08a', textColor: '#ca8a04', online: true },
  { rank: 2, name: 'Quality Of Milk Goodness', country: '🇩🇪', amount: '1355 $', avatar: 'https://ui-avatars.com/api/?name=Q&background=cbd5e1&color=fff', badgeColor: '#e5e7eb', textColor: '#6b7280', online: true },
  { rank: 3, name: 'Humanity Last Hope', country: '🇩🇪', amount: '1276 $', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', badgeColor: '#ffedd5', textColor: '#ea580c', online: true },
  { rank: 4, name: 'Strawberry Pancake', country: '🇩🇪', amount: '954 $', avatar: 'https://ui-avatars.com/api/?name=S&background=cbd5e1&color=fff', online: true },
  { rank: 5, name: 'Frisian Flag', country: '🇩🇪', amount: 'N/A $', avatar: 'https://ui-avatars.com/api/?name=F&background=cbd5e1&color=fff', online: false, hidden: true },
  { rank: 6, name: 'Anonymous', country: '🇩🇪', amount: 'N/A $', avatar: 'https://ui-avatars.com/api/?name=A&background=cbd5e1&color=fff', online: false, hidden: true },
  { rank: 7, name: 'Anonymous', country: '🇩🇪', amount: '674 $', avatar: 'https://ui-avatars.com/api/?name=A&background=cbd5e1&color=fff', online: true },
];

export default function LeaderboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#fafafa]" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4 items-center">
        <Text className="text-[28px] font-extrabold text-black tracking-tight mb-4">
          Global <Text className="text-[#55db36]">Leaderboard</Text>
        </Text>

        {/* Podium */}
        <View className="flex-row items-end justify-center gap-1.5 mb-8 h-24">
          {podiumData.map((item, index) => (
            <View key={index} style={{ width: 40, height: item.height, borderTopLeftRadius: 4, borderTopRightRadius: 4, overflow: 'hidden' }}>
              <LinearGradient colors={item.color} style={{ flex: 1, alignItems: 'center', paddingTop: 8 }}>
                <Text style={{ fontSize: item.rank === 1 ? 18 : 14 }}>{item.icon}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>

        {/* Tabs */}
        <View className="w-full flex-row justify-between gap-2">
          <TouchableOpacity className="flex-1 bg-[#34ea72] border border-green-400 rounded-[14px] py-2.5 items-center justify-center shadow-md shadow-green-300">
            <Text className="text-green-900 text-lg font-bold leading-none mb-0.5">$</Text>
            <Text className="text-green-900 text-xs font-bold">Donations</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#e9fceb] border border-green-200 rounded-[14px] py-2.5 items-center justify-center">
            <Text className="text-green-700 text-lg font-bold leading-none mb-0.5">⏱</Text>
            <Text className="text-green-700 text-xs font-bold text-center">Volunteer Time</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-[#e9fceb] border border-green-200 rounded-[14px] py-2.5 items-center justify-center">
            <Text className="text-green-700 text-lg font-bold leading-none mb-0.5">🔥</Text>
            <Text className="text-green-700 text-xs font-bold text-center">Streak</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Leaderboard List */}
      <ScrollView className="flex-1 px-6 mt-4" contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View className="bg-[#f3f4f6] rounded-[24px] overflow-hidden border border-gray-200 shadow-sm">
          {leaderboardData.map((user, index) => (
            <TouchableOpacity 
              key={index} 
              activeOpacity={0.7}
              className="flex-row items-center justify-between p-4 border-b border-white bg-[#f3f4f6]"
            >
              <View className="flex-row items-center gap-4">
                {/* Rank / Badge */}
                {user.rank <= 3 ? (
                  <View 
                    style={{ backgroundColor: user.badgeColor }} 
                    className="w-6 h-6 items-center justify-center rounded-full border border-gray-100 shadow-sm"
                  >
                    <Text style={{ color: user.textColor, fontSize: 10, fontWeight: 'bold' }}>★</Text>
                  </View>
                ) : (
                  <Text className="w-6 text-center text-[15px] font-bold text-gray-600">{user.rank}</Text>
                )}

                {/* Avatar */}
                <View className="relative">
                  <Image source={{ uri: user.avatar }} className="w-10 h-10 rounded-full border border-gray-300" />
                  {user.online && (
                    <View className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </View>

                {/* Name & Country */}
                <View>
                  <Text className="text-sm font-bold text-gray-800">{user.name}</Text>
                  <Text className="text-[10px]">{user.country}</Text>
                </View>
              </View>

              {/* Score / Hidden status */}
              {user.hidden ? (
                <Text className="text-xl text-gray-400">👁️‍🗨️</Text>
              ) : (
                <Text className="font-bold text-gray-800 tracking-wide">{user.amount}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
