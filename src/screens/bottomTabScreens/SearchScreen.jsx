import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'
// import Demo from  ''

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('ImageCarousel')}>
        <Text style={styles.buttonText}>Image Carousel Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('AnimatedTabs')}>
        <Text style={styles.buttonText}>Animated Tabs Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('BottomTabs_2')}>
        <Text style={styles.buttonText}>Bottom Tabs Animation - 2</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderRadius: 30,
    marginVertical: 5
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: Colors.DEFAULT_WHITE
  }
})