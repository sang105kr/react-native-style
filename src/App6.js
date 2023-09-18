import React from 'react';
import { View } from 'react-native';
import { viewStyles } from './styles';
import ShdowBox from './components/ShadowBox';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <ShdowBox />
    </View>
  );
};

export default App;
