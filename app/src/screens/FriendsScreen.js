import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const friendsData = [
  {
    name: 'Strawberry Pancake',
    avatar: 'https://ui-avatars.com/api/?name=S',
    hasBadge: true,
    badgeCount: 2,
    online: true,
  },
  {
    name: 'Frisian Flag',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    streak: 54,
  },
  {
    name: 'Red Slang',
    avatar: 'https://ui-avatars.com/api/?name=R',
    streak: 12,
  },
  {
    name: 'Rin4Made',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    streak: 97,
    online: true,
  },
  {
    name: 'FrontRunner',
    avatar: 'https://ui-avatars.com/api/?name=F',
  },
];

export default function FriendsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4 flex-row items-center gap-4 bg-white z-40">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="w-10 h-10 bg-white rounded-full items-center justify-center border border-gray-200 shadow-sm"
        >
          <Text className="text-xl text-black">{'<'}</Text>
        </TouchableOpacity>
        <Text className="text-[24px] font-bold text-black tracking-tight flex-1">
          Friends & <Text className="text-[#55db36]">Relations</Text>
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-6 pb-6">
        <View className="relative justify-center">
          <TextInput 
            placeholder="Search and discover other users"
            placeholderTextColor="#9ca3af"
            className="w-full bg-white border border-gray-300 rounded-full py-3 pl-5 pr-12 text-sm font-medium text-gray-700 shadow-sm"
          />
          <TouchableOpacity className="absolute right-4 items-center justify-center">
            <Text className="text-xl text-gray-400">🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Friends Section */}
        <View className="mb-10">
          <Text className="text-[22px] font-bold text-[#30363d] mb-4">Friends</Text>
          
          <View className="gap-3">
            {friendsData.map((friend, index) => (
              <TouchableOpacity 
                key={index}
                activeOpacity={0.7}
                className="bg-[#f0f1f2] rounded-2xl p-3 flex-row items-center justify-between shadow-sm"
              >
                <View className="flex-row items-center gap-3">
                  <View className="relative">
                    <Image source={{ uri: friend.avatar }} className="w-11 h-11 rounded-full border-2 border-white" />
                    {friend.hasBadge && (
                      <View className="absolute -top-1 -left-1 w-4 h-4 bg-green-600 rounded-full border border-white items-center justify-center">
                        <Text className="text-[9px] text-white font-bold">{friend.badgeCount}</Text>
                      </View>
                    )}
                    {friend.online && (
                      <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </View>
                  <View>
                    <View className="flex-row items-center gap-1">
                      <Text className="text-[13px] font-bold text-gray-800">{friend.name}</Text>
                      {friend.streak && (
                        <View className="flex-row items-center">
                          <Text className="text-red-500 text-[10px] font-bold ml-1">🔥 {friend.streak}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>

                <View className="flex-row items-center gap-4">
                  <TouchableOpacity className="bg-[#34ea72] px-4 py-1.5 rounded-md shadow-sm">
                    <Text className="text-white text-[11px] font-bold">Message</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="items-center justify-center p-1">
                    <Text className="text-gray-400 font-bold text-lg">×</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Relations Section */}
        <View className="mt-2">
          <Text className="text-[22px] font-bold text-[#30363d] mb-10">Relations</Text>
          
          <View className="items-center w-full pb-20">
            <Text className="text-gray-400 text-lg leading-tight font-light text-center w-4/5">
              You currently do not have any relations added.
            </Text>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
