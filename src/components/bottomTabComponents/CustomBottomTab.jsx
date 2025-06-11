import { Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../constants';
import Animated, { useAnimatedStyle,  withSpring, withTiming } from 'react-native-reanimated';
import BottomTabIcon from './BottomTabIcon';

const CustomBottomTab = ({ state, descriptors, navigation }) => {

    const { width } = useWindowDimensions();
    const MARGIN = 20;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

    const translateAnimation = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(TAB_WIDTH * state.index) }],
        }
    })

    return (
        <View style={[styles.tabBarContainer, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
            <Animated.View
                style={[
                    styles.slidingTabContainer,
                    { width: TAB_WIDTH },
                    translateAnimation,
                ]}
            >
                <View style={styles.slidingTab} />
            </Animated.View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, { merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={route.key} // ✅ Fix: Add a key here
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.contentContainer}>
                            <BottomTabIcon route={route.name} isFocused={isFocused} />
                            {/* {isFocused && ( */}
                                <Text
                                    style={{
                                        color: isFocused ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_WHITE,
                                        fontSize: 12,
                                        fontFamily: Fonts.POPPINS_SEMI_BOLD
                                    }}
                                >
                                    {route.name}
                                </Text>
                            {/* )} */}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    )
}

export default CustomBottomTab

const styles = StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 90,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: Colors.DEFAULT_SKY_BLUE,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    slidingTab: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: Colors.DEFAULT_WHITE
    },
    slidingTabContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center'
    }
})