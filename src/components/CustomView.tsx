// src/components/CustomView.tsx
import React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '../context/ThemeContext';

interface CustomViewProps extends ViewProps {
  className?: string; // Menambahkan properti className opsional
  children: React.ReactNode; // Menyediakan children untuk komponen View
}

const CustomView = ({
  children,
  className,
  style,
  ...props
}: CustomViewProps) => {
  const {isDarkMode} = useTheme();

  // Style berdasarkan mode yang dipilih
  const backgroundStyle = isDarkMode ? 'bg-slate-900' : 'bg-neutral-300';

  return (
    <View
      className={`${backgroundStyle} ${className}`}
      style={style}
      {...props}>
      {children}
    </View>
  );
};

export default CustomView;
