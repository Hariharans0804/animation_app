import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
       flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    }
})