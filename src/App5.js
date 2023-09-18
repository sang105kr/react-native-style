import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
