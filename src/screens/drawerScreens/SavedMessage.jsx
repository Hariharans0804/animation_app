import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { FirstTypeFloatingButton, FourthTypeFloatingButton, SecondTypeFloatingButton, ThirdTypeFloatingButton } from '../../components';

const SavedMessage = () => {
  const [type, setType] = useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SavedMessage Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => setType('first')}>
        <Text style={styles.buttonText}>First Type</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setType('second')}>
        <Text style={styles.buttonText}>Second Type</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setType('third')}>
        <Text style={styles.buttonText}>Third Type</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setType('fourth')}>
        <Text style={styles.buttonText}>Fourth Type</Text>
      </TouchableOpacity>

      {(type === 'first' || type === 'second' || type === 'third' || type === 'fourth') && (<Text style={styles.heading}>Type : {type} type</Text>)}

      {/* {type === 'first' && <Text style={styles.heading}>First Type</Text>}
      {type === 'second' && <Text style={styles.heading}>Second Type</Text>}
      {type === 'third' && <Text style={styles.heading}>Third Type</Text>}
      {type === 'fourth' && <Text style={styles.heading}>Fourth Type</Text>} */}

      {type === 'first' && <FirstTypeFloatingButton />}
      {type === 'second' && <SecondTypeFloatingButton />}
      {type === 'third' && <ThirdTypeFloatingButton />}
      {type === 'fourth' && <FourthTypeFloatingButton />}
    </SafeAreaView>
  )
}

export default SavedMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginTop: 100,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.DEFAULT_SKY_BLUE,
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 30
  },
  buttonText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE,
    padding: 10,
    textAlign: 'center'
  },
  heading: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 20,
    padding: 10,
    backgroundColor: Colors.DEFAULT_DARK_GRAY,
    color: Colors.DEFAULT_WHITE
  }
})