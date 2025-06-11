import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import { useDerivedValue, withTiming } from 'react-native-reanimated';
import AnimatedColor from './AnimatedColor';
import AnimatedCheckMarkPath from './AnimatedCheckMarkPath';

const CustomCheckBox = memo(props => {

    const {
        checked,
        checkMarkColor,
        checkedBorderColor,
        unCheckedBorderColor,
        checkedBackgroundColor,
        unCheckedBackgroundColor,
        height,
        width,
    } = props;

    const progress = useDerivedValue(() => {
        return withTiming(checked ? 1 : 0);
    })

    return (
        <Svg
            width={width}
            height={height}
            // width="49"
            // height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <AnimatedColor
                progress={progress}
                checkedBorderColor={checkedBorderColor}
                unCheckedBorderColor={unCheckedBorderColor}
                checkedBackgroundColor={checkedBackgroundColor}
                unCheckedBackgroundColor={unCheckedBackgroundColor}
            />
            <AnimatedCheckMarkPath
                progress={progress}
                checkMarkColor={checkMarkColor}
            />
        </Svg>
    )
})

export default CustomCheckBox

const styles = StyleSheet.create({})