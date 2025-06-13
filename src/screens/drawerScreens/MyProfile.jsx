import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Canvas, Group } from '@shopify/react-native-skia'
import * as d3 from 'd3';
import { barChartData } from '../../data/barChartData'
import { AnimatedText, BarPath, XAxisText } from '../../components'
import { useSharedValue, withTiming } from 'react-native-reanimated'

const MyProfile = () => {

  const [selectedDay, setSelectedDay] = useState('Total');

  const selectedBar = useSharedValue(null);

  const { width } = useWindowDimensions();
  const progress = useSharedValue(0);
  const selectedValue = useSharedValue(0);
  const totalValue = barChartData.reduce((acc, cur) => acc + cur.value, 0);

  const canvasWidth = width;
  const canvasHeight = 350;

  const graphWidth = width;
  const graphMargin = 20;
  const graphHeight = canvasHeight - graphMargin;

  const barWidth = 28;

  const xRange = [0, graphWidth];

  const xDomain = barChartData.map((dataPoint) => dataPoint.label);

  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const yRange = [0, graphHeight];

  const yDomain = [0, d3.max(barChartData, (yDataPoint) => yDataPoint.value)];

  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  useEffect(() => {
    progress.value = withTiming(1, { duration: 1000 })
    selectedValue.value = withTiming(totalValue, { duration: 1000 })
  }, [progress, selectedValue, totalValue]);


  const touchHandler = (e) => {
    const touchX = e.nativeEvent.locationX;
    const touchY = e.nativeEvent.locationY;
    // console.log({ touchX, touchY });
    // console.log({ 'X Step': x.step() });

    const index = Math.floor((touchX - barWidth / 2) / x.step());
    // console.log({ index });

    if (index >= 0 && index < barChartData.length) {
      const { label, value, day } = barChartData[index];
      // console.log({ label, value, day });
      // console.log(x(label));
      // console.log(y(value));

      if (
        touchX > x(label) - barWidth / 2 &&
        touchX < x(label) + barWidth / 2 &&
        touchY > graphHeight - y(value) &&
        touchY < graphHeight
      ) {
        setSelectedDay(day);
        selectedBar.value = label;
        selectedValue.value = withTiming(value);
        console.log({ label, value, day });
      } else {
        setSelectedDay('Total');
        selectedBar.value = null;
        selectedValue.value = withTiming(totalValue);
        console.log('Outside the bar');
      }

    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={Images.RUN} style={styles.icon} />
        <Text style={styles.textTitle}>Walk & Run Activity</Text>
        <AnimatedText selectedValue={selectedValue} />
        <Text style={styles.textSteps}>{selectedDay} Steps</Text>
      </View>
      <Canvas
        onTouchStart={touchHandler}
        style={{
          width: canvasWidth,
          height: canvasHeight,
          // backgroundColor: 'pink'
        }}
      >
        {barChartData.map((data, index) => (
          <Group key={index}>
            <BarPath
              x={x(data.label)}
              y={y(data.value)}
              barWidth={barWidth}
              graphHeight={graphHeight}
              progress={progress}
              label={data.label}
              selectedBar={selectedBar}
            />
            <XAxisText
              x={x(data.label)}
              y={canvasHeight}
              text={data.label}
              selectedBar={selectedBar}
            />
          </Group>
        ))}
      </Canvas>
    </SafeAreaView>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECDE'
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_WHITE
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 20
  },
  textTitle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 36,
    color: '#111111'
  },
  textSteps: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 38,
    color: '#111111'
  },
})