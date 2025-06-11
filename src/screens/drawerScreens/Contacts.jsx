import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { calculatePercentageDonutChart, generateRandomNumbersDonutChart } from '../../utils'
import { DonutChart, RenderItem } from '../../components'
import { useFont } from '@shopify/react-native-skia'

const RADIUS = 160;
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 46;
const GAP = 0.04;

const Contacts = () => {

  const n = 5;
  const [data, setData] = useState([]);

  const totalValue = useSharedValue(0);
  const decimals = useSharedValue([]);
  const colors = ['#fe769c', '#46a0f8', '#c3f439', '#88dabc', '#e43433'];

  const generateData = () => {
    const generateNumbers = generateRandomNumbersDonutChart(n);
    const total = generateNumbers.reduce(
      (acc, currentValue) => acc + currentValue,
    );
    const generatePercentages = calculatePercentageDonutChart(generateNumbers, total);
    const generateDecimals = generatePercentages.map(
      number => Number(number.toFixed(0)) / 100,
    );

    const arrayOfObjects = generateNumbers.map((value, index) => ({
      value,
      percentage: generatePercentages[index],
      color: colors[index],
    }));

    totalValue.value = withTiming(total, { duration: 1000 });
    decimals.value = [...generateDecimals];
    setData(arrayOfObjects);

    // console.log({ arrayOfObjects, generateNumbers, total, generatePercentages, generateDecimals });

  }

  const font = useFont(require('./../../assets/fonts/Roboto-Bold.ttf'), 60);
  const smallFont = useFont(require('./../../assets/fonts/Roboto-Light.ttf'), 25);

  if (!font || !smallFont) {
    return <View />
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            font={font}
            smallFont={smallFont}
            totalValue={totalValue}
            n={n}
            gap={GAP}
            decimals={decimals}
            colors={colors}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={generateData}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
        {data.map((item, index) => {
          return <RenderItem item={item} index={index} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Contacts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: 10
  },
  button: {
    backgroundColor: Colors.DEFAULT_LIGHT_WHITE,
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 40
  },
  buttonText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 20
  }
})