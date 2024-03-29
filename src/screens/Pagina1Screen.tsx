import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme'
interface Props extends StackScreenProps <any, any> {}

export const Pagina1Screen = ({navigation}:Props) => {

       
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button 
            title='Ir Pagina 2'
            onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        {/* <Button 
            title="Ir Persona"
            onPress={ () => navigation.navigate('PersonaScreen')}
        /> */}

        <Text style={{
            marginVertical: 20,
            fontSize: 20,
            textAlign: 'center'
        }}>
            Navegar con argumentos
        </Text>
        <View style={{ flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
                style={{
                    ...styles.bigButton,
                    backgroundColor: '#5856D6'
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Pedro'
                })}
            >
                <Text style={styles.bigButtonText}>Pedro</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.bigButton,
                    backgroundColor: '#FF9427'
                }}
                onPress={ () => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'Maria'
                })}
            >
                <Text style={styles.bigButtonText}>Maria</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
