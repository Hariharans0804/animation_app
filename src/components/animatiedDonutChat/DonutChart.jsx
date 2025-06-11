import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Canvas, Path, Skia, Text } from '@shopify/react-native-skia'
import { Colors } from '../../constants';
import { useDerivedValue } from 'react-native-reanimated';
import DonutPath from './DonutPath';


const DonutChart = ({
    radius,
    strokeWidth,
    outerStrokeWidth,
    font,
    smallFont,
    totalValue,
    n,
    gap,
    decimals,
    colors,
}) => {
    const array = Array.from({ length: n })

    const innerRadius = radius - outerStrokeWidth / 2;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);

    const targetText = useDerivedValue(
        () => `$${Math.round(totalValue.value)}`,
        [],
    );

    const fontSize = font.measureText('$00');
    const smallFontSize = smallFont.measureText('Total Spent');

    const textX = useDerivedValue(() => {
        const _fontSize = font.measureText(targetText.value);
        return radius - _fontSize.width / 2;
    })

    return (
        <View style={styles.container}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    color={Colors.DEFAULT_LIGHT_WHITE}
                    style='stroke'
                    strokeWidth={outerStrokeWidth}
                    strokeJoin='round'
                    strokeCap='round'
                    start={0}
                    end={1}
                />
                {array.map((_, index) => {
                    return <DonutPath
                        key={index}
                        radius={radius}
                        strokeWidth={strokeWidth}
                        outerStrokeWidth={outerStrokeWidth}
                        color={colors[index]}
                        decimals={decimals}
                        index={index}
                        gap={gap}
                    />;
                })}
                <Text
                    x={radius - smallFontSize.width / 2}
                    y={radius + smallFontSize.height / 2 - fontSize.height / 1.2}
                    text={'Total Spent'}
                    font={smallFont}
                    color={Colors.DEFAULT_BLACK}
                />
                <Text
                    x={textX}
                    y={radius + fontSize.height / 2}
                    text={targetText}
                    font={font}
                    color={Colors.DEFAULT_BLACK}
                />
            </Canvas>
        </View>
    )
}

export default DonutChart

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})