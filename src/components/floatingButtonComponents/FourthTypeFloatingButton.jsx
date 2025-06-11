import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../constants'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const FourthTypeFloatingButton = () => {

    const width = useSharedValue(60);
    const height = useSharedValue(60);
    const borderRadius = useSharedValue(50);
    const isOpen = useSharedValue(false);
    const progress = useDerivedValue(() => isOpen.value ? withTiming(1) : withTiming(0),);

    const handleOpen = () => {
        if (!isOpen.value) {
            width.value = withSpring(200);
            height.value = withSpring(250);
            borderRadius.value = withSpring(10);
            isOpen.value = true;
        };
    };

    const plusIcon = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${progress.value * 45}deg` }],
        };
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: height.value,
            borderRadius: borderRadius.value,
        };
    });

    const handleClose = () => {
        if (isOpen.value) {
            width.value = withTiming(60);
            height.value = withTiming(60);
            borderRadius.value = withTiming(50);
            isOpen.value = false;
        };
    };

    return (
        <View style={{ flex: 1 }}>

            <Animated.View style={[styles.container, animatedStyle]}>

                <Pressable
                    style={styles.iconContainer}
                    onPress={() => {
                        handleOpen();
                        handleClose();
                    }}
                >
                    <Animated.View style={[styles.iconContainer, plusIcon]}>
                        <Image source={Images.PLUSICON} style={styles.icon} />
                    </Animated.View>
                </Pressable>

                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={Images.FOLDERICON} style={styles.icon} />
                    </View>
                    <Text style={styles.text}>New Folder</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={Images.FILEICON} style={styles.icon} />
                    </View>
                    <Text style={styles.text}>New File</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={Images.PENICON} style={styles.icon} />
                    </View>
                    <Text style={styles.text}>Edit File</Text>
                </View>

            </Animated.View>
        </View>
    )
}

export default FourthTypeFloatingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_SKY_LIGHT_BLUE,
        position: 'absolute',
        bottom: 30,
        right: 30,
        overflow: 'hidden'
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 26,
        height: 26
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    text: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 18
    }
})