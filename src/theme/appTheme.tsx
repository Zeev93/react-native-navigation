import { StyleSheet } from "react-native"


export const colors = {
    primary: '#5856D6',
    
}

export const styles = StyleSheet.create({
    globalMargin: {
        margin: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    bigButton: {
        width: 100,
        height: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    avatar: {
        width:150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 10,
    },
    menuButton: {
        marginVertical: 10
    },
    menuItem: {
        fontSize: 20,
    }
})