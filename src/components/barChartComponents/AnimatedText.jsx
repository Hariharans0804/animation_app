import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Canvas, Text, useFont } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';

const AnimatedText = ({ selectedValue }) => {

    const font = useFont(require('./../../assets/fonts/Roboto-Bold.ttf'), 88);

    const animatedText = useDerivedValue(() => {
        return `${Math.round(selectedValue.value)}`
    })

    if (!font) {
        return <View />
    }

    const fontSize = font.measureText('0');

    return (
        <Canvas style={{ height: fontSize.height + 40 }}>
            <Text
                font={font}
                text={animatedText}
                color={'#111111'}
                y={fontSize.height + 20}
            />
        </Canvas>
    )
}

export default AnimatedText

const styles = StyleSheet.create({})