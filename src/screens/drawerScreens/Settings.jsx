import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.DEFAULT_DARK_BLUE
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    // color: Colors.DEFAULT_WHITE
  }
})