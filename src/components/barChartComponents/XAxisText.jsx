import React from 'react'
import { Text, useFont } from '@shopify/react-native-skia'
import { useDerivedValue, withTiming } from 'react-native-reanimated';

const XAxisText = ({ x, y, text, selectedBar }) => {

    const color = useDerivedValue(() => {
        if (selectedBar.value === text) {
            return withTiming('#111111');
        } else if (selectedBar.value === null) {
            return withTiming('#111111');
        } else {
            return withTiming('#D1D0C5');
        }
    })

    const font = useFont(require('./../../assets/fonts/Roboto-Bold.ttf'), 18);

    if (!font) {
        return null;
    }

    const fontSize = font.measureText(text);

    return (
        <Text
            font={font}
            x={x - fontSize.width / 2}
            y={y}
            text={text}
            color={color}
        />
    )
}

export default XAxisText

