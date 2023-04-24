import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/toptab/ChatScreen';
import { ContactScreen } from '../screens/toptab/ContactScreen';
import { AlbumScreen } from '../screens/toptab/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTap = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={ ({route}) => ({
                tabBarStyle: {
                    elevation: 0,
                    borderBottomWidth: 0
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarShowIcon: true,
                tabBarPressColor: 'white',
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = ''
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbubble-ellipses-outline'
                        break;
                        case 'ContactScreen':
                            iconName = 'book-outline'
                        break;
                        case 'AlbumScreen':
                            iconName = 'card-outline'
                        break;
                    }
                    
                    return <Icon name={iconName} size={30} color="#900" />
                }  
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactScreen" component={ContactScreen} />
            <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
        </Tab.Navigator>
    );
}