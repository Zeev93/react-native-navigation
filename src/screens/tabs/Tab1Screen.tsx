import React from 'react'
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Iconos
        </Text>

        <Text>
            <Icon name="rocket-outline" size={30} color="#900" />
        </Text>
    </View>
  )
}
