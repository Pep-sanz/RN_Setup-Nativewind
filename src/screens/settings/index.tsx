import React from 'react';
import {Switch, Text, View} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import CustomView from '../../components/CustomView';

const SettingsScreen = (): React.ReactElement => {
  const {isDarkMode, toggleTheme} = useTheme();

  // Style berdasarkan mode yang dipilih
  const backgroundStyle = isDarkMode ? 'bg-slate-900' : 'bg-neutral-300';
  const textStyle = isDarkMode ? 'text-white' : 'text-black';

  return (
    <CustomView className={`flex-1 ${backgroundStyle}`}>
      {/* Bagian Toggle Switch */}
      <View className="flex-1 justify-center items-center">
        <Text className={`text-lg ${textStyle} my-4`}>Settings Screen</Text>
        <Text className={`text-lg ${textStyle} my-4`}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>

        {/* Toggle Switch */}
        <View className="my-4">
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>
    </CustomView>
  );
};

export default SettingsScreen;
