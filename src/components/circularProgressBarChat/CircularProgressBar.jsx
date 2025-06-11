import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Canvas, Path, Skia, Text, } from '@shopify/react-native-skia'
import { Colors } from '../../constants';
import { useDerivedValue } from 'react-native-reanimated';

const CircularProgressBar = ({ radius, strokeWidth, font, percentage, end }) => {

    const innerRadius = radius - strokeWidth / 2;
    const path = Skia.Path.Make();
    path.addCircle(radius, radius, innerRadius);


    const targetText = useDerivedValue(
        () => `${Math.round(percentage.value)}%`,
        [],
    );

    const fontSize = font.measureText('00%');

    const textX = useDerivedValue(() => {
        const _fontSize = font.measureText(targetText.value);
        return radius - _fontSize.width / 2;
    }, []);

    return (
        <View style={{ width: radius * 2, height: radius * 2 }}>
            <Canvas style={styles.container}>
                <Path
                    path={path}
                    strokeWidth={strokeWidth}
                    style={'stroke'}
                    color={Colors.DEFAULT_LIGHT_GRAY_2}
                    strokeJoin={'round'}
                    strokeCap={'round'}
                    start={0}
                    end={1}
                />
                <Path
                    path={path}
                    strokeWidth={strokeWidth}
                    style={'stroke'}
                    color={Colors.DEFAULT_WHITE_2}
                    strokeJoin={'round'}
                    strokeCap={'round'}
                    start={0}
                    end={end}
                />
                <Text
                    x={textX}
                    y={radius + fontSize.height / 2}
                    text={targetText}
                    font={font}
                    color={Colors.DEFAULT_WHITE}
                />
            </Canvas>
        </View>
    )
}

export default CircularProgressBar

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})