import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../../constants'
import { drawerList } from '../../data/data'
import DrawerItem from './DrawerItem'

const Drawer = ({ active }) => {
    // console.log('active', active);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.containerProfile}>
                    <Image source={Images.MAN} resizeMode="contain" style={styles.imageProfile} />
                    <Text style={styles.profileName}>Jhon Doe</Text>
                </View>
                <View style={styles.containerItem}>
                    {drawerList.map((item, index) => {
                        return <DrawerItem key={index} item={item} active={active} />
                    })}
                </View>
            </View>
        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.DEFAULT_BLUE,
        zIndex: -99,
    },
    contentContainer: {
        paddingTop: 120,
        marginHorizontal: 30,
        maxWidth: 180
    },
    containerProfile: {
        gap: 14,
        borderBottomWidth: 1,
        borderBottomColor: Colors.DEFAULT_LIGHT_GRAY,
        paddingBottom: 14
    },
    imageProfile: {
        width: 48,
        height: 48
    },
    profileName: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_WHITE
    },
    containerItem: {
        marginTop: 10
    }
})