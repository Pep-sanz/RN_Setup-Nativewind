import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../context/ThemeContext';
import Home from '../screens/home';
import Wishlist from '../screens/wishlist';
import Booking from '../screens/booking';
import SettingsScreen from '../screens/settings';

const Tab = createBottomTabNavigator();

// Daftar item navigasi
const navItems = [
  {name: 'Home', label: 'Home', icon: 'home', component: Home},
  {name: 'Wishlist', label: 'Wishlist', icon: 'heart', component: Wishlist},
  {name: 'Booking', label: 'Booking', icon: 'book', component: Booking},
  {name: 'Settings', label: 'Settings', icon: 'cog', component: SettingsScreen},
];

const Navbar: React.FC = () => {
  const {isDarkMode} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Menyembunyikan header di atas
        tabBarStyle: {
          backgroundColor: isDarkMode ? 'black' : 'white',
          height: 80, // Mengatur tinggi tab bar
          paddingBottom: 10, // Padding bawah agar item lebih tinggi
          paddingTop: 10, // Padding atas agar item lebih tinggi
        },
        tabBarActiveTintColor: '#E65605',
        tabBarInactiveTintColor: isDarkMode ? 'white' : 'black',
        tabBarItemStyle: {
          justifyContent: 'center', // Memastikan item di tengah secara vertikal
          alignItems: 'center', // Memastikan item di tengah secara horizontal
          //   paddingVertical: 5, // Memberikan padding vertikal pada item tab
          //   marginVertical: 5, // Jarak vertikal pada masing-masing tab item
        },
        tabBarLabelStyle: {
          fontSize: 14, // Ukuran teks label
        },
      }}>
      {navItems.map(item => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({color}) => (
              <Icon name={item.icon} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navbar;
