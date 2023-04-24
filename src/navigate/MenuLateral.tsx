import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigate } from './StackNavigate';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false
                drawerType: width > 768 ? 'permanent' : 'front',
            }}
            drawerContent={ (props) => <MenuInterno  {...props} /> }
        >
        <Drawer.Screen name="Tabs" component={ Tabs } />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}



const MenuInterno = ({ navigation }:DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View
                style={styles.avatarContainer}
            >
                <Image  
                    style={styles.avatar}
                    source={{
                        uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
                    }}
                />
            </View>
            {/* Fin Avatar */}

            {/* Opciones de Menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton}>
                    <Text onPress={ () => navigation.navigate('Tabs') } style={styles.menuItem}> Stack Navigation </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}>
                    <Text onPress={ () => navigation.navigate('SettingsScreen') } style={styles.menuItem}> Settings </Text>
                </TouchableOpacity>
            </View>
                    
            {/* Fin Opciones Menu */}
        </DrawerContentScrollView>
    )
}