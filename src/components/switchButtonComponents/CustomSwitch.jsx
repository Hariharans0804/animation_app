import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const CustomSwitch = ({ activeColor, inActiveColor }) => {

    const [active, setActive] = useState(false);

    const switchTranslate = useSharedValue(0);

    const progress = useDerivedValue(() => {
        return withTiming(active ? 22 : 0);
    });


    useEffect(() => {
        if (active) {
            switchTranslate.value = 22;
        } else {
            switchTranslate.value = 4;
        }
    }, [active, switchTranslate]);


    const backgroundColorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 22],
            [inActiveColor, activeColor],
        );
        return { backgroundColor, };
    });


    const customSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(switchTranslate.value, {
                        mass: 1,
                        damping: 15,
                        stiffness: 120,
                        overshootClamping: false,
                        restSpeedThreshold: 0.001,
                        restDisplacementThreshold: 0.001,
                    }),
                }
            ]
        }
    });


    return (
        <TouchableWithoutFeedback
            onPress={() => {
                setActive(!active);
            }}
        >
            <Animated.View style={[styles.container, backgroundColorStyle]}>
                <Animated.View style={[styles.circle, customSpringStyles]} />
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 28,
        backgroundColor: '#F2F5F7',
        borderRadius: 30,
        justifyContent: 'center'
    },
    circle: {
        width: 24,
        height: 24,
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 30,
        shadowColor: Colors.DEFAULT_BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 4,
    }
})