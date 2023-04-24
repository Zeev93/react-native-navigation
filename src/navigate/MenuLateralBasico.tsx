import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigate } from './StackNavigate';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false
                drawerType: width > 768 ? 'permanent' : 'front'
            }}
        >
        <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigate} />
        <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}