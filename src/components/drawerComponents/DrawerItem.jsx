import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'
import useTypeSafeNavigation from '../../hooks/useTypeSafeNavigation'

const DrawerItem = ({ item, active }) => {

    const navigation = useTypeSafeNavigation();

    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                // console.log(item.navigate);
                navigation.navigate(item.navigate);
                active.value = false;
            }}
        >
            <Image source={item.icon} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>{item.name}</Text>
        </Pressable>
    )
}

export default DrawerItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingVertical: 16
    },
    image: {
        width: 26,
        height: 26
    },
    text: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_WHITE
    }
})