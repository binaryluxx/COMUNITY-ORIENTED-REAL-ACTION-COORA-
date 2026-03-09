import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ThanksScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-6 py-4 flex-row items-center gap-4 bg-white z-40 relative">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="w-10 h-10 bg-white rounded-full items-center justify-center border border-gray-200 shadow-sm"
        >
           <Text className="text-xl text-black">{'<'}</Text>
        </TouchableOpacity>

        <View className="flex-1 mt-6 pl-2">
          <Text className="text-[26px] font-extrabold text-black tracking-tight leading-none mb-1">
            Rana At'thariq's
          </Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-[42px] font-black text-[#facc15]" style={styles.textShadow}>+274</Text>
            
            <View className="bg-orange-100 px-4 py-1.5 rounded-xl border border-white transform -rotate-2 ml-1 z-10">
              <Text className="text-[28px] text-[#428135] tracking-wide" style={styles.cursiveText}>
                Thanks letter
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Letters List */}
      <ScrollView className="flex-1 px-6 pt-10 pb-16 relative z-0" contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        
        {/* Decorative Floating Envelope 1 */}
        <View className="absolute right-4 top-1 z-20 transform rotate-12 shadow-lg rounded-md">
            <View className="w-20 h-14 bg-yellow-400 rounded-md border border-white overflow-hidden relative">
               <View className="absolute -top-3 left-0 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[25px] border-t-yellow-300" />
            </View>
        </View>

        {/* Letter 1 */}
        <View className="bg-[#bacdf2] rounded-[18px] p-5 relative border-[3px] border-[#9bafe5] mx-auto w-[90%] transform -rotate-1 mb-10" style={styles.cardShadow}>
          <View className="flex-row items-end justify-between border-b-2 border-[#8196cf] pb-2 mb-3">
            <Text className="text-[#3b5998] font-black text-[15px]">from : el fawaz</Text>
            <Text className="text-[#6d84b4] text-[13px] font-bold">Jakarta Social Service</Text>
          </View>

          <Text className="text-[#3b5998] font-bold text-[14px] leading-relaxed relative z-10 underline decoration-[#9ab0e0]">
            hi rana!! thankyou so much for your help in this volunteer activity! you have made it so much easier for us to provide education for unprivileged children
          </Text>

          <View className="items-end mt-3">
            <Text className="text-[10px] font-bold text-[#5c7bbb]">Jakarta, 23 march 2025</Text>
          </View>

          <Image 
            source={{ uri: 'https://ui-avatars.com/api/?name=el&background=fff&color=000' }} 
            className="absolute -top-4 -right-3 w-10 h-10 rounded-full border-2 border-white shadow-md z-30" 
          />
        </View>

        {/* Decorative Floating Envelope 2 */}
        <View className="absolute left-2 top-[320px] z-20 transform -rotate-12 shadow-lg rounded-md">
            <View className="w-[74px] h-[50px] bg-pink-400 rounded-md border border-white items-center justify-center relative">
                <View className="w-8 h-[2px] bg-white/50 mb-4 rounded" />
                <View className="w-10 h-[2px] bg-white/50 mb-1 rounded absolute" />
                <View className="w-6 h-[2px] bg-white/50 mt-4 rounded absolute" />
            </View>
        </View>

        {/* Letter 2 */}
        <View className="bg-[#75e985] rounded-[18px] p-5 relative border-[3px] border-[#5ccc6b] mx-auto w-[98%] transform rotate-1 mb-10" style={styles.cardShadow}>
          <View className="flex-row items-end gap-3 border-b-2 border-[#4baf5a] pb-2 mb-3">
            <Text className="text-[#0d5926] font-black text-[15px]">from : freyya</Text>
            <Text className="text-[#349a46] text-[13px] font-bold flex-1">Head of Panti Asuhan Asy-Syarif</Text>
          </View>

          <Text className="text-[#0d5926] font-bold text-[14px] leading-relaxed relative z-10 underline decoration-[#62d274] text-justify">
            We would like to express our deepest gratitude for your kindness and generosity toward our orphanage. Your support means more than we can ever put into words. Because of you, we can continue our education, meet our daily needs, and feel the warmth of care from people who truly believe in our future. May Allah bless you with good health, happiness, and endless success. May every kindness you share return to you in greater measure. Thank you for being a source of hope and light in our journey.
          </Text>

          <View className="items-end mt-3">
            <Text className="text-[10px] font-bold text-[#2e883e]">Malaysia, 19 December 2024</Text>
          </View>
        </View>

        {/* Letter 3 */}
        <View className="relative rounded-[18px] mx-auto w-[94%] transform -rotate-2 mb-10" style={styles.cardShadow}>
          <LinearGradient 
             colors={['#fcd36c', '#eeb04e']}
             className="rounded-[18px] p-5 border-[3px] border-[#e1ba50] relative z-10 overflow-hidden"
          >
            <View className="flex-row items-end gap-3 border-b-2 border-[#cfa53b] pb-2 mb-3">
              <Text className="text-[#664b12] font-black text-[15px]">from : Rifqi A.</Text>
              <Text className="text-[#987425] text-[13px] font-bold">Pandawara Group</Text>
            </View>

            <Text className="text-[#664b12] font-bold text-[14px] leading-relaxed relative z-10 underline decoration-[#e1ba50]">
              Dear Our Dedicated Volunteers,{'\n\n'}We would like to extend our deepest gratitude for your time, energy, and commitment in participating in the river clean-up activity. Your willingness to take action and contribute to environmental preservation truly reflects a strong sense of
            </Text>

            <View className="items-end mt-3 relative z-30 text-right w-full">
              <Text className="text-[10px] font-bold text-[#8c671a] w-full text-right">Jakarta, 23 march 2025</Text>
            </View>
            
            <View className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#eeb04e] to-transparent pointer-events-none z-20" />
          </LinearGradient>

          <Image 
            source={{ uri: 'https://ui-avatars.com/api/?name=R&background=3b5998&color=fff' }} 
            className="absolute -top-5 right-2 w-11 h-11 rounded-full border-2 border-white shadow-md z-30" 
          />

          {/* Decorative Floating Envelope 3 */}
          <View className="absolute -top-10 -right-4 z-40 transform -rotate-6 shadow-lg rounded-md">
            <View className="w-[84px] h-[56px] bg-blue-500 rounded-md border border-white overflow-hidden relative">
               <View className="absolute -top-4 left-0 w-0 h-0 border-l-[42px] border-l-transparent border-r-[42px] border-r-transparent border-t-[30px] border-t-blue-400" />
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cursiveText: {
    fontStyle: 'italic',
    // In React Native, custom fonts need to be loaded. 
    // Fallback to italic system font if 'Playfair Display' is not available.
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  }
});
