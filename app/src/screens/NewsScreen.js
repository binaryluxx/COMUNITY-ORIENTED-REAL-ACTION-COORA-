import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function NewsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hero Background Image & Overlay */}
      <View style={styles.heroContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1542385150-149ab06e78ba?w=800&q=80' }} 
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient 
          colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={styles.gradientOverlay}
        />

        {/* Top Nav */}
        <SafeAreaView edges={['top']} style={styles.topNav}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="w-10 h-10 bg-white/60 rounded-full items-center justify-center border border-white/40"
          >
            <Text className="text-xl font-bold">{'<'}</Text>
          </TouchableOpacity>
          <View className="flex-row gap-3">
            <TouchableOpacity className="w-10 h-10 bg-white/60 rounded-full items-center justify-center border border-white/40">
              <Text className="text-lg">🔖</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 bg-white/60 rounded-full items-center justify-center border border-white/40">
              <Text className="text-lg">🔗</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      {/* Content Area */}
      <ScrollView className="flex-1 px-6 -mt-32 z-20" contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        
        {/* Tags */}
        <View className="flex-row gap-2 mb-4">
          <View className="bg-green-100 border border-green-200 px-3 py-1.5 rounded-full shadow-sm">
            <Text className="text-green-700 text-xs font-bold uppercase tracking-wider">Bencana</Text>
          </View>
          <View className="bg-white/90 border border-gray-200 px-3 py-1.5 rounded-full flex-row items-center gap-1.5 shadow-sm">
            <Text className="text-gray-700 text-xs">📍 Bogor, Jawa Barat</Text>
          </View>
        </View>

        {/* Title */}
        <Text className="text-[32px] font-extrabold leading-tight tracking-tight text-gray-800 mb-6" style={styles.textShadow}>
          Bantu Korban Longsor di Bogor
        </Text>

        {/* Organizer */}
        <View className="flex-row items-center gap-4 mb-8">
          <View className="w-14 h-14 bg-green-50 rounded-full items-center justify-center border-2 border-green-100 shadow-sm">
            <Text className="text-green-500 text-2xl">🛡️</Text>
          </View>
          <View>
            <Text className="font-bold text-[16px] text-gray-800">Badan Penanggulangan</Text>
            <Text className="text-[13px] text-green-600 font-semibold mt-0.5">Verified Organizer ✓</Text>
          </View>
        </View>

        {/* Progress Card */}
        <View className="bg-white border border-gray-100 rounded-[24px] p-6 mb-8 shadow-md relative overflow-hidden">
          <View className="absolute -right-8 -top-8 w-32 h-32 bg-green-100/50 rounded-full opacity-50" />
          
          <Text className="text-gray-500 text-sm font-semibold mb-1">Terkumpul</Text>
          <View className="flex-row justify-between items-end mb-4 z-10">
            <Text className="text-[32px] font-extrabold text-green-500 tracking-tight leading-none">Rp 33.7M</Text>
            <Text className="text-2xl font-black text-gray-800 leading-none">75%</Text>
          </View>

          <View className="w-full bg-gray-100 rounded-full h-3.5 mb-5 overflow-hidden flex-row z-10">
            <LinearGradient 
              colors={['#4ade80', '#2dd4bf']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ width: '75%', height: '100%', borderRadius: 999 }}
            />
          </View>

          <View className="flex-row justify-between items-center z-10">
            <Text className="text-[13px] font-bold text-gray-500">🧑‍🤝‍🧑 1.240 Donatur</Text>
            <View className="bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Text className="text-[13px] font-bold text-gray-500">⏱️ 5 hari lagi</Text>
            </View>
          </View>
        </View>

        {/* News Article */}
        <View className="bg-gray-50 border border-gray-200 rounded-[24px] p-6 shadow-sm mb-6">
          <View className="flex-row items-center gap-2 mb-4">
            <View className="w-2 h-6 bg-green-500 rounded-full shadow-sm shadow-green-400" />
            <Text className="text-[18px] font-extrabold text-gray-800">Kondisi Terkini di Lapangan</Text>
          </View>

          <Text className="text-gray-600 text-[15px] font-medium leading-relaxed mb-4 text-justify">
            Hujan dengan intensitas tinggi yang mengguyur wilayah Bogor selama tiga hari berturut-turut telah mengakibatkan tanah longsor di beberapa titik rawan. Akses jalan utama tertutup material tanah dan bebatuan, mengisolasi ratusan warga di Desa Ciomas.
          </Text>
          <Text className="text-gray-600 text-[15px] font-medium leading-relaxed mb-5 text-justify">
            Saat ini pasukan relawan gabungan dan tim evakuasi sedang berupaya membuka akses jalan darurat. Kebutuhan paling mendesak di lapangan saat ini meliputi <Text className="font-bold text-gray-800">obat-obatan, selimut tebal, makanan siap saji, serta perlengkapan sanitasi dan air bersih.</Text>
          </Text>

          {/* Mini update card */}
          <View className="bg-red-50 rounded-xl p-4 border border-red-100 flex-row items-start gap-4 shadow-sm relative overflow-hidden">
            <View className="mt-1">
              <View className="w-3 h-3 bg-red-500 rounded-full shadow-sm shadow-red-500 border border-white" />
            </View>
            <View className="flex-1 z-10">
              <Text className="text-[14px] font-bold text-red-700 mb-1">Dibutuhkan: Relawan Medis & Logistik</Text>
              <Text className="text-[13px] text-gray-700 font-medium leading-snug">
                Tim tanggap darurat saat ini sangat membutuhkan tenaga bantuan tambahan di posko pengungsian utama yang mulai kesulitan menangani warga.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Fixed Action Bar */}
      <View style={styles.bottomBar}>
        <View className="flex-row gap-3">
          <TouchableOpacity className="flex-1 bg-green-50 py-4 rounded-full items-center justify-center border border-green-200">
            <Text className="text-green-700 font-extrabold text-[15px]">Gabung Relawan</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-green-500 py-4 rounded-full items-center justify-center shadow-lg shadow-green-400">
            <Text className="text-white font-extrabold text-[15px]">Donasi Sekarang</Text>
          </TouchableOpacity>
        </View>
        <View className="w-32 h-1.5 bg-gray-300 rounded-full self-center mt-6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // gray-100
  },
  heroContainer: {
    relative: true,
    height: 380,
    width: '100%',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  topNav: {
    position: 'absolute',
    top: 10,
    left: 24,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 20,
  },
  textShadow: {
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#f3f4f6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 20,
  }
});
