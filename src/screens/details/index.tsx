// src/screens/Details.tsx
import React from 'react';
import {View} from 'react-native';
import CustomText from '../../components/CustomText';

const Details = () => {
  return (
    <View className="flex-1 bg-red-600 justify-center items-center">
      <CustomText className="text-3xl">Details Screen</CustomText>
    </View>
  );
};

export default Details;
