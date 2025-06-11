import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { calculatePercentage, formatNumberWithCommas, generateRandomNumber } from '../../utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CircularProgressBar } from '../../components'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { useFont } from '@shopify/react-native-skia'

const GOALS = 100000;
const RADIUS = 120;
const STROKE_WIDTH = 30;

const Calls = () => {
  const [balance, setBalance] = useState(0);

  const percentage = useSharedValue(0);
  const end = useSharedValue(0);
  const font = useFont(require('./../../assets/fonts/Roboto-Bold.ttf'), 60);    // require('./../../assets/fonts/Roboto-Bold.ttf')

  const handlePress = () => {
    const generateRandomValue = generateRandomNumber(GOALS);
    const generatePercentage = calculatePercentage(generateRandomValue, GOALS);

    setBalance(generateRandomValue);
    percentage.value = withTiming(generatePercentage, { duration: 1000 });
    end.value = withTiming(generatePercentage / 100, { duration: 1000 });
  }

  if (!font) {
    return <View />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>

        <View style={styles.circularContainer}>
          <CircularProgressBar
            radius={RADIUS}
            strokeWidth={STROKE_WIDTH}
            font={font}
            percentage={percentage}
            end={end}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textSmall}>Balance</Text>
          <Text style={styles.text}>${formatNumberWithCommas(balance)}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSmall}>Goals</Text>
          <Text style={styles.text}>${formatNumberWithCommas(GOALS)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.textButton}>Random</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_DARK_BLACK
  },
  contentContainer: {
    padding: 40,
    backgroundColor: Colors.DEFAULT_DARK_BLACK_2,
    margin: 10,
    borderRadius: 34,
    justifyContent: 'center'
  },
  circularContainer: {
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 20,
    gap: 10
  },
  textSmall: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 36,
    fontFamily: Fonts.ROBOTO_LIGHT,
  },
  text: {
    fontSize: 36,
    fontFamily: Fonts.ROBOTO_BOLD,
    color: Colors.DEFAULT_WHITE,
  },
  button: {
    backgroundColor: Colors.DEFAULT_DARK_BLACK_2,
    margin: 10,
    padding: 20,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 36,
    fontFamily: Fonts.ROBOTO_BOLD
  }
})