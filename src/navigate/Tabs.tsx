import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { StackNavigate } from './StackNavigate';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTap } from './TopTap';

export const Tabs = () => {

    return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndriod />
}


const BottomTabAndriod = createMaterialBottomTabNavigator();

const TabsAndriod = () => {
  return (
    <BottomTabAndriod.Navigator
        
        sceneAnimationEnabled={true}
        activeColor='#ffffff'
        inactiveColor='rgba( 255, 255, 255, .5)'
        
        barStyle={{
            backgroundColor: colors.primary,            
        }}
        
        
        screenOptions={ ({route}) => ({
            tabBarIcon: ({color, focused}) => {
                let iconName: string = ''
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'american-football-outline'
                    break;
                    case 'Tab2Screen':
                        iconName = 'balloon-outline'
                    break;
                    case 'StackNavigator':
                        iconName = 'beer-outline'
                    break;
                }
                
                return <Icon name={iconName} size={30} color="#900" />
            }  
        })}
    >
      <BottomTabAndriod.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndriod.Screen name="TopTap" options={{ title: 'TopTap' }} component={TopTap} />
      <BottomTabAndriod.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigate} />
    </BottomTabAndriod.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () =>  {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={ ( {route} ) => ({
            tabBarActiveTintColor: 'red',
            tabBarStyle: {
                borderTopColor: colors.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle:{
                fontSize: 15
            },  
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = ''
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;
                    case 'Tab2Screen':
                        iconName = 'T2'
                    break;
                    case 'StackNavigator':
                        iconName = 'St'
                    break;
                }
                
                return <Text style={{ color }}>{ iconName }</Text>
            }          
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: colors.primary}}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTap" options={{ title: 'TopTap' }} component={TopTap} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigate} />
    </BottomTabIOS.Navigator>
  );
}