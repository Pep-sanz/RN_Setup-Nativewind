// src/screens/Booking.tsx
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import CustomLayout from '../../lib/layout/CustomLayout';
import CustomView from '../../components/CustomView';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';

const Booking = () => {
  const navigate = useNavigation();

  return (
    <CustomLayout>
      {/* Menggunakan justify-center dan items-center untuk memastikan konten berada di tengah */}
      <View className="flex-1 justify-center items-center ">
        {/* View ini juga ditengah-tengah */}
        <CustomView className="flex justify-center items-center">
          <CustomText className="text-2xl font-bold text-center">
            Booking Screen
          </CustomText>
        </CustomView>

        {/* Button untuk navigasi */}
        <TouchableOpacity
          className=" rounded-lg mt-5 px-4 py-2"
          onPress={() => navigate.navigate('Details' as never)}>
          <CustomText className="font-bold text-lg">Go to Details</CustomText>
        </TouchableOpacity>
      </View>
    </CustomLayout>
  );
};

export default Booking;
