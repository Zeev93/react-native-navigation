import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: 'Pag 2',
            headerBackTitle: 'Back' // IOS
        })
    }, [])
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button 
                title="Ir Pagina 3"
                onPress={ () => navigation.dispatch(
                    CommonActions.navigate('Pagina3Screen')
                )}
            />
        </View>
    )
}
