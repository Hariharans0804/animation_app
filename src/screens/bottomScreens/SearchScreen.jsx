import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
         flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    }
})