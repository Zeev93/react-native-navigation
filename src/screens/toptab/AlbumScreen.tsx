import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/appTheme';

export const AlbumScreen = () => {

    const {logOut, authState:{isLoggedIn} } = useContext(AuthContext)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            AlbumScreen
        </Text>

        {
            isLoggedIn && (
                <Button
                    title='Logout'
                    onPress={ () => logOut()}
                
                />
            )
        }
    </View>
  )
}
