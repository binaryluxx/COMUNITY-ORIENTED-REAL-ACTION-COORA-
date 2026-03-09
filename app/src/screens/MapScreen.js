import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Full Screen Map Background */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80' }} 
        style={styles.mapBackground}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header */}
        <View className="w-full items-center mt-2 px-6">
          <Text className="text-xs text-white/80 font-semibold tracking-wider uppercase" style={styles.shadowText}>
            Location
          </Text>
          <TouchableOpacity className="flex-row items-center gap-1">
            <Text className="text-[20px] font-bold text-white" style={styles.shadowText}>
              Cengkareng, West Jakarta
            </Text>
            <Text className="text-white text-lg">▾</Text>
          </TouchableOpacity>
        </View>

        {/* Radar & Avatars Wrapper */}
        <View className="flex-1 items-center justify-center">
          <View className="relative w-48 h-48 -mt-24 ml-12">
            {/* Center Pin */}
            <View className="absolute top-1/2 left-1/2 -ml-3 -mt-3 z-20">
              <Text className="text-white text-2xl">📍</Text>
            </View>

            {/* Base Circle */}
            <View className="absolute inset-0 bg-red-500/20 rounded-full border border-red-500/30" />
            
            {/* Ping Circle */}
            <View className="absolute inset-0 bg-red-500/30 rounded-full" style={styles.radarPing} />

            {/* Floating Avatars */}
            <Image 
              source={{ uri: 'https://ui-avatars.com/api/?name=Ran&background=random' }} 
              className="absolute top-4 left-4 w-9 h-9 rounded-lg border-2 border-white transform -rotate-6"
            />
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' }} 
              className="absolute top-8 right-0 w-9 h-9 rounded-lg border-2 border-white transform rotate-6"
            />
            <Image 
              source={{ uri: 'https://ui-avatars.com/api/?name=User&background=random' }} 
              className="absolute bottom-6 left-12 w-9 h-9 border-2 border-white transform rotate-2"
            />
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' }} 
              className="absolute bottom-4 right-10 w-9 h-9 rounded-full border-2 border-white"
            />
          </View>
        </View>

        {/* Alert Popup Card */}
        <View className="absolute bottom-[350px] left-6 right-6 z-30">
          {/* Overlapping Avatars */}
          <View className="absolute -top-4 left-4 flex-row z-40">
            <Image className="w-8 h-8 rounded-full border-2 border-white -mr-2" source={{ uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80' }} />
            <Image className="w-8 h-8 rounded-full border-2 border-white -mr-2" source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' }} />
            <Image className="w-8 h-8 rounded-full border-2 border-white" source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' }} />
          </View>
          
          <View className="bg-white/95 rounded-2xl p-4 shadow-xl flex-row items-center overflow-hidden">
            {/* Red Triangle Fake */}
            <View className="absolute -left-6 -bottom-6 w-24 h-32 bg-red-600 transform rotate-45 items-center justify-center">
              <Text className="text-white text-4xl font-bold -rotate-45 -mt-2 ml-4">!</Text>
            </View>
            
            <View className="pl-14 flex-1">
              <View className="flex-row justify-between flex-wrap">
                <View>
                  <Text className="text-gray-500 text-xs font-semibold">Kalideres, Cengkareng</Text>
                  <Text className="text-red-600 font-bold text-[17px] mt-0.5">SEVERE LANDSLIDE</Text>
                </View>
                <View className="w-7 h-7 bg-purple-100 rounded-full items-center justify-center">
                  <View className="w-2.5 h-2.5 bg-purple-600 rounded-full" />
                </View>
              </View>
              
              <View className="flex-row justify-between items-center mt-3">
                <Text className="text-gray-500 text-[11px] font-medium">Updated 5 mins ago</Text>
                <TouchableOpacity className="flex-row items-center gap-1">
                  <Text className="text-gray-700 text-xs font-bold">View Details</Text>
                  <Text className="text-gray-700 text-xs font-bold">→</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Neighborhood Status Panel (Bottom Sheet style) */}
        <View className="absolute bottom-[80px] left-0 w-full bg-white/40 border-t border-white/40 rounded-t-[32px] pt-4 px-6 z-20 h-[340px]">
          {/* Pull Handle */}
          <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-4" />
          
          <Text className="text-white text-[15px] font-bold tracking-widest uppercase text-center mb-5" style={styles.shadowText}>
            Neighborhood Status
          </Text>
          
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
            {/* Status Card 1 */}
            <View className="bg-white/90 rounded-[20px] p-4 flex-row justify-between items-center mb-3">
              <View className="flex-row items-center gap-3">
                <View className="w-1.5 h-12 bg-red-500 rounded-full" />
                <View>
                  <Text className="text-gray-500 text-[11px] font-bold">Ciomas, Bogor</Text>
                  <Text className="text-gray-900 font-bold text-base leading-tight">Hujan Badai</Text>
                  <View className="flex-row mt-1">
                    <Image className="w-5 h-5 rounded-full border border-white -mr-1.5" source={{ uri: 'https://ui-avatars.com/api/?name=A' }} />
                    <Image className="w-5 h-5 rounded-full border border-white -mr-1.5" source={{ uri: 'https://ui-avatars.com/api/?name=B' }} />
                    <Image className="w-5 h-5 rounded-full border border-white" source={{ uri: 'https://ui-avatars.com/api/?name=C' }} />
                    <Text className="text-[9px] text-gray-400 font-bold ml-2 mt-1">+5</Text>
                  </View>
                </View>
              </View>
              <View className="items-end gap-2">
                <View className="bg-green-200 px-3 py-1.5 rounded-full">
                  <Text className="text-green-700 text-xs font-bold">Zona Hijau</Text>
                </View>
                <TouchableOpacity className="w-6 h-6 bg-gray-100 rounded-full items-center justify-center">
                  <Text className="text-gray-400 text-xs">↗</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Status Card 2 */}
            <View className="bg-white/90 rounded-[20px] p-4 flex-row justify-between items-center mb-10">
              <View className="flex-row items-center gap-3">
                <View className="w-1.5 h-12 bg-blue-600 rounded-full" />
                <View>
                  <Text className="text-gray-400 text-[11px] font-bold">Gancit, Jakarta Selatan</Text>
                  <Text className="text-gray-900 font-bold text-base leading-tight">Banjir</Text>
                  <View className="flex-row mt-1">
                    <Image className="w-5 h-5 rounded-full border border-white -mr-1.5" source={{ uri: 'https://ui-avatars.com/api/?name=D' }} />
                    <Image className="w-5 h-5 rounded-full border border-white -mr-1.5" source={{ uri: 'https://ui-avatars.com/api/?name=E' }} />
                    <Image className="w-5 h-5 rounded-full border border-white" source={{ uri: 'https://ui-avatars.com/api/?name=F' }} />
                     <Text className="text-[9px] text-gray-400 font-bold ml-2 mt-1">+5</Text>
                  </View>
                </View>
              </View>
              <View className="items-end gap-2">
                <View className="bg-yellow-200 px-3 py-1.5 rounded-full">
                  <Text className="text-yellow-700 text-xs font-bold">Zona Kuning</Text>
                </View>
                <TouchableOpacity className="w-6 h-6 bg-gray-100 rounded-full items-center justify-center">
                  <Text className="text-gray-400 text-xs">↗</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // gray-900
  },
  mapBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
  },
  safeArea: {
    flex: 1,
  },
  shadowText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  radarPing: {
    transform: [{ scale: 1.5 }],
    opacity: 0.5,
  }
});
