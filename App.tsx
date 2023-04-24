import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigate } from './src/navigate/StackNavigate';
// import { MenuLateralBasico } from './src/navigate/MenuLateralBasico';
import { MenuLateral } from './src/navigate/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigate /> */}
        <MenuLateral />
    </NavigationContainer>
  );
};

export default App;

