import React from 'react'
import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { colors, styles } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../../components/TouchableIcon';

export const Tab1Screen = () => {

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Iconos
        </Text>

        <Text>
            <TouchableIcon iconName="rocket-outline" />
            <TouchableIcon iconName="heart-outline" />
            <TouchableIcon iconName="beer-outline" />
            <TouchableIcon iconName="cloud-done-outline" />
            <TouchableIcon iconName="bug-outline" />
            <TouchableIcon iconName="call-outline" />
        </Text>
    </View>
  )
}
