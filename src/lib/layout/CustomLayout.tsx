// src/components/CustomLayout.tsx
import React from 'react';
import {SafeAreaView, ScrollView, ViewStyle} from 'react-native';
import CustomView from '../../components/CustomView';

interface CustomLayoutProps {
  children: React.ReactNode;
  // Menambahkan prop untuk style tambahan jika diperlukan
  containerStyle?: ViewStyle;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  containerStyle,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* CustomView di sini harus benar-benar full height */}
      <CustomView className="flex-1" style={containerStyle}>
        {/* Pastikan ScrollView tidak menyebabkan masalah pada posisi */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            flexGrow: 1,
          }}
          className="flex-1">
          {children}
        </ScrollView>
      </CustomView>
    </SafeAreaView>
  );
};

export default CustomLayout;
