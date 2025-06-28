import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomImageCarousal, CustomImageCarouselLandscape, CustomImageCarouselSquare } from '../../components';
import { Colors } from '../../constants';

const ImageCarouselScreen = () => {

    const data1 = [
        { image: require('../../assets/images/customCarouselImages/image-product-1.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-2.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-3.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-4.jpg') },
    ];

    const data2 = [
        { image: require('../../assets/images/customCarouselImages/image-product-1-landscape.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-1-landscape.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-1-landscape.jpg') },
        { image: require('../../assets/images/customCarouselImages/image-product-1-landscape.jpg') },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carouselContainer}>
                <Text style={styles.text}>Image Carousel Square</Text>
                <CustomImageCarousal data={data1} autoPlay={true} pagination={true} />
            </View>
            <View style={styles.carouselContainer}>
                <Text style={styles.text}>Image Carousel Landscape</Text>
                <CustomImageCarousal data={data2} autoPlay={true} pagination={true} />
            </View>
        </SafeAreaView>
    )
}

export default ImageCarouselScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    text: {
        textAlign: 'center',
        color: Colors.DEFAULT_BLACK,
        marginBottom: 10
    },
    carouselContainer: {
        marginBottom: 20,
    },
})