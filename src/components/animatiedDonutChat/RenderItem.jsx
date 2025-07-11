import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

const RenderItem = ({ item, index }) => {

    const { width } = useWindowDimensions();

    return (
        <Animated.View
            style={[styles.container, { width: width * 0.9 }]}
            entering={FadeInDown.delay(index * 200)}
            exiting={FadeOutDown}
        >
            <View style={styles.contentContainer}>
                <View style={[styles.color, { backgroundColor: item.color }]} />
                <Text style={styles.text}>{item.percentage}%</Text>
                <Text style={styles.text}>${item.value}</Text>
            </View>
        </Animated.View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_LIGHT_WHITE,
        paddingVertical: 20,
        marginBottom: 10,
        borderRadius: 20,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    color: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.DEFAULT_BLACK
    }

})