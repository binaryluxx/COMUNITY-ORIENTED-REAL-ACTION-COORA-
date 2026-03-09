import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Simple Grid Item Component
const GridItem = ({ title, imageUri, isSelected, onPress, height = 80 }) => (
  <TouchableOpacity 
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.gridItem, { height }, isSelected && styles.gridItemSelected]}
  >
    <Image source={{ uri: imageUri }} style={styles.gridImage} />
    <View style={styles.gridOverlay} />
    <View style={styles.gridTitleBox}>
      <Text style={styles.gridTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function AddRequestScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [selectedDisaster, setSelectedDisaster] = useState('Landslides');
  const [showModal, setShowModal] = useState(false);

  const disasters = [
    { title: 'Flood', uri: 'https://images.unsplash.com/photo-1542385150-149ab06e78ba?w=800&q=80', height: 80 },
    { title: 'Landslides', uri: 'https://images.unsplash.com/photo-1624737792190-aa08016af424?q=80&w=800', height: 80 },
    { title: 'Earthquake', uri: 'https://images.unsplash.com/photo-1579246473525-2dfb9f1d07b4?q=80&w=800', height: 90 },
    { title: 'Fire', uri: 'https://images.unsplash.com/photo-1523861751938-121b5323b48b?q=80&w=800', height: 90 },
  ];

  const submitForm = () => {
    setShowModal(true);
  };

  const handleModalOkay = () => {
    setShowModal(false);
    navigation.navigate('MainTabs', { screen: 'HomeTab' });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-6 py-4 flex-row items-center gap-4 bg-white z-40">
        <TouchableOpacity 
          onPress={() => step === 2 ? setStep(1) : navigation.goBack()}
          className="w-10 h-10 bg-white rounded-full items-center justify-center border border-gray-200"
        >
          <Text className="text-xl text-black font-bold">{"<"}</Text>
        </TouchableOpacity>
        <Text className="text-[26px] font-semibold text-[#30363d] leading-none">
          Request <Text className="text-gray-500">Help</Text>
        </Text>
      </View>

      {/* Steps Content */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
        
        {step === 1 && (
          <View>
            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Emergency Level</Text>
              <TextInput 
                placeholder="ex. Critical, Urgent, Moderate, Non-urgent"
                className="w-full border-2 border-gray-200 rounded-[10px] py-3.5 px-4 text-[15px] font-medium text-gray-700 bg-white"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Location</Text>
              <View className="flex-row items-center gap-3">
                <TextInput 
                  placeholder="Auto-detect by GPS if left empty"
                  className="flex-1 border-2 border-gray-200 rounded-[10px] py-3.5 px-4 text-[15px] font-medium text-gray-700 bg-white"
                  placeholderTextColor="#9ca3af"
                />
                <TouchableOpacity className="w-12 h-12 items-center justify-center border-2 border-gray-200 rounded-[10px]">
                  <Text className="text-xl">📍</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-[11px] font-bold text-gray-600 mt-2">
                <Text style={{color:'#ef4444'}}>! </Text>
                AI detected your GPS location is marked as high priority.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-4">What help do you need?</Text>
              <View className="flex-row flex-wrap justify-between">
                {disasters.map((d, index) => (
                  <View key={index} style={{ width: '48%', marginBottom: 12 }}>
                    <GridItem 
                      title={d.title} 
                      imageUri={d.uri} 
                      height={d.height}
                      isSelected={selectedDisaster === d.title}
                      onPress={() => setSelectedDisaster(d.title)}
                    />
                  </View>
                ))}
                <View style={{ width: '100%', marginBottom: 12 }}>
                  <GridItem 
                    title="Other" 
                    imageUri="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80" 
                    height={80}
                    isSelected={selectedDisaster === 'Other'}
                    onPress={() => setSelectedDisaster('Other')}
                  />
                </View>
              </View>
            </View>
          </View>
        )}

        {step === 2 && (
          <View>
            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Describe your situation</Text>
              <TextInput 
                placeholder="Describe in detail..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="w-full border-2 border-gray-200 rounded-[10px] py-3.5 px-4 text-[15px] font-medium text-gray-700 bg-white h-28"
                placeholderTextColor="#9ca3af"
              />
              <Text className="text-right text-[11px] font-bold text-gray-400 mt-1">0/500</Text>
            </View>

            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Number of people affected</Text>
              <TextInput 
                placeholder="Choose a number"
                className="w-full border-2 border-gray-200 rounded-[10px] py-3.5 px-4 text-[15px] font-medium text-gray-700 bg-white"
                placeholderTextColor="#9ca3af"
                keyboardType="numeric"
              />
            </View>

            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Contact Information</Text>
              <TextInput 
                placeholder="Phone number (SMS)"
                className="w-full border-2 border-gray-200 rounded-[10px] py-3.5 px-4 text-[15px] font-medium text-gray-700 bg-white"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
              />
            </View>

            <View className="mb-5">
              <Text className="text-[17px] font-semibold text-[#30363d] mb-2">Upload Media</Text>
              <TouchableOpacity className="w-full h-[140px] border-2 border-dashed border-gray-300 rounded-[14px] bg-gray-50 items-center justify-center">
                <View className="w-[52px] h-[52px] rounded-full bg-gray-200 items-center justify-center">
                  <Text className="text-2xl text-gray-500">+</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-start gap-3 mt-4">
              <TouchableOpacity className="w-5 h-5 rounded bg-green-500 items-center justify-center mt-0.5">
                <Text className="text-white text-xs font-bold">✓</Text>
              </TouchableOpacity>
              <Text className="text-[14px] font-bold text-gray-600 flex-1 leading-tight">
                I confirm this request is accurate and not false information.
              </Text>
            </View>
          </View>
        )}

      </ScrollView>

      {/* Bottom Floating Action */}
      <View style={styles.bottomNavContainer}>
        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)', '#ffffff']}
          style={styles.gradient}
        />
        <View className="items-end w-full px-6 pb-8 pt-4">
          <TouchableOpacity 
            onPress={step === 1 ? () => setStep(2) : submitForm}
            className="w-[140px] bg-[#34ea72] py-3 rounded-full flex-row items-center justify-center gap-2 shadow-lg shadow-green-400"
          >
            <Text className="text-[#0d5926] font-bold text-lg">{step === 1 ? 'Next' : 'Send'}</Text>
            <Text className="text-[#0d5926] font-bold text-lg">{step === 1 ? '→' : '📩'}</Text>
          </TouchableOpacity>
          <Text className="text-gray-400 text-sm font-medium mt-2 w-[140px] text-center pr-2">
            Step {step}/2
          </Text>
        </View>
      </View>

      {/* Success Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View className="flex-1 bg-black/40 items-center justify-center px-6">
          <View className="bg-white rounded-xl p-8 w-full max-w-[340px] items-center text-center">
            <Text className="text-lg font-extrabold text-[#30363d] mb-4">
              Your request has been <Text className="text-gray-500">sent!</Text>
            </Text>
            <Text className="text-gray-600 text-[15px] font-medium text-center leading-relaxed mb-8">
              Alerts have been sent to nearby volunteers, and we'll let you know if help is on the way!
            </Text>
            <TouchableOpacity 
              onPress={handleModalOkay}
              className="bg-[#34ea72] py-3.5 px-12 rounded-full shadow-md shadow-green-300"
            >
              <Text className="text-[#0d5926] font-bold text-[17px]">Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    width: '100%',
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gridItemSelected: {
    borderWidth: 3,
    borderColor: '#22c55e',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  gridTitleBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    borderColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  gridTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
