// App.tsx
import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import Navigation from './src/lib/layout/Navigation';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
