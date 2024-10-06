// src/@types/global.d.ts
import 'react-native';

declare module 'react-native' {
  // Menambahkan properti `className` untuk komponen ViewProps
  interface ViewProps {
    className?: string;
  }

  // Menambahkan properti `className` untuk komponen TextProps
  interface TextProps {
    className?: string;
  }

  // Menambahkan properti `className` untuk komponen ImageProps
  interface ImageProps {
    className?: string;
  }

  // Menambahkan properti `className` untuk komponen TouchableOpacityProps
  interface TouchableOpacityProps {
    className?: string;
  }

  // Menambahkan properti `className` untuk komponen TextInputProps
  interface TextInputProps {
    className?: string;
  }

  // Tambahkan interface lainnya jika diperlukan
  // Misalnya untuk komponen lain seperti ScrollView, SafeAreaView, dll.
  interface ScrollViewProps {
    className?: string;
  }

  interface SafeAreaViewProps {
    className?: string;
  }

  interface FlatListProps<ItemT> {
    className?: string;
  }
}
