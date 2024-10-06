// src/components/CustomText.tsx
import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from '../context/ThemeContext';

interface CustomTextProps extends TextProps {
  className?: string; // Menambahkan properti className opsional
  children: React.ReactNode; // Menyediakan children sebagai teks atau elemen yang ingin ditampilkan
}

const CustomText = ({
  children,
  className,
  style,
  ...props
}: CustomTextProps) => {
  const {isDarkMode} = useTheme();

  // Style berdasarkan mode yang dipilih
  const textStyle = isDarkMode ? 'text-white' : 'text-black';

  return (
    <Text className={`${textStyle} ${className}`} style={style} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
