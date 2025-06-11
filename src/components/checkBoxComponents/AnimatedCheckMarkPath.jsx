import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useRef, useState } from 'react'
import { Path } from 'react-native-svg'
import Animated, { useAnimatedProps } from 'react-native-reanimated'

const AnimatedCheckMarkPath = memo((props) => {
    const { progress, checkMarkColor } = props;
    const [length, setLength] = useState(0);

    const pathRef = useRef(null);

    const AnimatedPath = Animated.createAnimatedComponent(Path);

    const checkMarkAnimation = useAnimatedProps(() => {
        const strokeDashoffset = length - length * progress.value;
        const opacity = progress.value;
        return { opacity, strokeDashoffset };
    })

    return (
        <AnimatedPath
            animatedProps={checkMarkAnimation}
            onLayout={() => setLength(pathRef.current.getTotalLength())}
            ref={pathRef}
            d="M12 24.4068L20.6667 32.9999L36.5 17.1667"
            // stroke="white"
            stroke={checkMarkColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={length}
        />
    )
})

export default AnimatedCheckMarkPath

const styles = StyleSheet.create({})