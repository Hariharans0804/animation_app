import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Path } from 'react-native-svg'
import Animated, { interpolateColor, useAnimatedProps, } from 'react-native-reanimated';

const AnimatedColor = memo((props) => {
    const {
        progress,
        checkedBorderColor,
        unCheckedBorderColor,
        checkedBackgroundColor,
        unCheckedBackgroundColor,
    } = props;

    const AnimationColor = Animated.createAnimatedComponent(Path);

    const animation = useAnimatedProps(() => {
        const fill = interpolateColor(
            progress.value,
            [0, 1],
            [unCheckedBackgroundColor, checkedBackgroundColor]
        );
        const stroke = interpolateColor(
            progress.value, [0, 1],
            [unCheckedBorderColor, checkedBorderColor]
        );
        return { fill, stroke };
    });


    return (
        <AnimationColor
            animatedProps={animation}
            d="M2 16C2 8.26801 8.26801 2 16 2H33C40.732 2 47 8.26801 47 16V33C47 40.732 40.732 47 33 47H16C8.26801 47 2 40.732 2 33V16Z"
            // fill="#FFA901"
            // stroke="#FFA901"
            strokeWidth="4"
        />
    )
})

export default AnimatedColor

const styles = StyleSheet.create({})