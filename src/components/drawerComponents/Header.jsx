import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors, Fonts, Images } from '../../constants';

const Header = ({ active }) => {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <TouchableOpacity
                style={styles.ham}
                onPress={() => {
                    active.value = true;
                }}
            >
                <Image source={Images.HAMBURGER} resizeMode="contain" style={styles.ham} />
            </TouchableOpacity>
            <Text style={styles.heading}>Chats</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_LIGHT_BLUE,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center',
        // borderWidth:1,
        // borderColor:Colors.DEFAULT_WHITE
    },
    ham: {
        width: 34,
        height: 30
    },
    heading: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_WHITE,
        marginTop: 5,
        marginLeft: 20
    }
})