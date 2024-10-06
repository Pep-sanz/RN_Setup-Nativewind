import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../context/ThemeContext';
import CustomText from '../../components/CustomText';
import CustomLayout from '../../lib/layout/CustomLayout';

const Home = (): React.ReactElement => {
  const navigate = useNavigation();
  const {isDarkMode, toggleTheme} = useTheme();

  // Style berdasarkan mode yang dipilih
  const textStyle = isDarkMode ? 'text-white' : 'text-black';

  return (
    <CustomLayout>
      <CustomText className="text-2xl font-bold text-center mt-10">
        Welcome to Home
      </CustomText>
      <CustomText className="text-lg text-center my-4">
        This is the home screen
      </CustomText>
      <TouchableOpacity onPress={() => navigate.navigate('Settings' as never)}>
        <CustomText className="text-lg text-center my-4">
          Go to settings screen
        </CustomText>
      </TouchableOpacity>

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
    </CustomLayout>
  );
};

export default Home;
