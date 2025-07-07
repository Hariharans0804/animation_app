import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants'
import { AnimatedTabsButton } from '../../components'
import Animated, { FadeInRight, FadeOutLeft, FadeOutRight, LayoutAnimationConfig } from 'react-native-reanimated';

const tabs = ['#F7374F', '#183B4E', '#00B3E6', '#00CC96', '#6E8E59','#D98324'];

const AnimatedTabsScreen = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabData = [
        { icon: 'LifeBuoy', label: 'Buoy' },
        { icon: 'Fish', label: 'Fresh fish' },
        { icon: 'Sailboat', label: 'Sail' },
        { icon: 'Ship', label: 'Ship it' },
        { icon: 'ShipWheel', label: 'Manage it' },
        { icon: 'Box', label: 'Checking' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <AnimatedTabsButton
                data={tabData}
                onChange={(index) => setSelectedIndex(index)}
                selectedIndex={selectedIndex}
            />

            <LayoutAnimationConfig skipEntering>
                <Animated.View
                    key={`tab-content-${selectedIndex}`}
                    entering={FadeInRight.springify().damping(80).stiffness(200)}
                    exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
                    style={{
                        backgroundColor: tabs[selectedIndex],
                        flex: 1,
                        borderRadius: 8
                    }}
                />
            </LayoutAnimationConfig>
        </SafeAreaView>
    )
}

export default AnimatedTabsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        justifyContent: 'center',
        margin: 12,
        gap: 12
    }
})