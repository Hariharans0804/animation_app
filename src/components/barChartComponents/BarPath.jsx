import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDerivedValue, withTiming } from 'react-native-reanimated'
import { Path, Skia } from '@shopify/react-native-skia'

const BarPath = ({ x, y, barWidth, graphHeight, progress, label, selectedBar }) => {

    const color = useDerivedValue(() => {
        if (selectedBar.value === label) {
            return withTiming('#FF6346');
        } else if (selectedBar.value === null) {
            return withTiming('#FF6346');
        } else {
            return withTiming('#D1D0C5');
        }
    })

    const path = useDerivedValue(() => {
        const barPath = Skia.Path.Make();

        barPath.addRRect({
            rect: {
                x: x - barWidth / 2,
                y: graphHeight,
                width: barWidth,
                height: y * -1 * progress.value,
            },
            rx: 8,
            ry: 8,
        });

        return barPath;
    });


    return (
        <Path path={path} color={color} />
    )
}

export default BarPath

const styles = StyleSheet.create({})