import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigate } from './src/navigate/StackNavigate';
// import { MenuLateralBasico } from './src/navigate/MenuLateralBasico';
import { MenuLateral } from './src/navigate/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
        <AppState>

            {/* <StackNavigate /> */}
            <MenuLateral />

        </AppState>
    </NavigationContainer>
  );
};


const AppState = ({children}:any) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default App;

