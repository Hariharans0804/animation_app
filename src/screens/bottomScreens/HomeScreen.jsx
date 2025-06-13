import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../../constants'
import { CustomCheckBox, CustomSwitch } from '../../components'

const HomeScreen = () => {

    const [checked, setChecked] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);

    const handleCheckBoxPress = () => {
        setChecked(!checked);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.marginBottom]}>Custom Check Box</Text>
            <TouchableWithoutFeedback
                onPress={() => {
                    handleCheckBoxPress();
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#FFA901'}
                        unCheckedBorderColor={'#D9D9D9'}
                        checkedBackgroundColor={'#FFA901'}
                        unCheckedBackgroundColor={'white'}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    handleCheckBoxPress();
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#378BA4'}
                        unCheckedBorderColor={'#81BECE'}
                        checkedBackgroundColor={'#378BA4'}
                        unCheckedBackgroundColor={'#E8EDE7'}
                    />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => {
                    // handleCheckBoxPress();
                    setChecked1(!checked1);
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked1}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#FFA901'}
                        unCheckedBorderColor={'#D9D9D9'}
                        checkedBackgroundColor={'#FFA901'}
                        unCheckedBackgroundColor={'white'}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    // handleCheckBoxPress();
                    setChecked2(!checked2);
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked2}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#378BA4'}
                        unCheckedBorderColor={'#81BECE'}
                        checkedBackgroundColor={'#378BA4'}
                        unCheckedBackgroundColor={'#E8EDE7'}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    // handleCheckBoxPress();
                    setChecked3(!checked3);
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked3}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#107980'}
                        unCheckedBorderColor={'#76A1A7'}
                        checkedBackgroundColor={'#107980'}
                        unCheckedBackgroundColor={'#EDE1CF'}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    // handleCheckBoxPress();
                    setChecked4(!checked4);
                }}
            >
                <View style={styles.checkBox}>
                    <CustomCheckBox
                        checked={checked4}
                        width={50}
                        height={50}
                        checkMarkColor={'white'}
                        checkedBorderColor={'#796EA8'}
                        unCheckedBorderColor={'#A6A9C8'}
                        checkedBackgroundColor={'#796EA8'}
                        unCheckedBackgroundColor={'#D3D9E9'}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Text style={[styles.text, styles.marginBottom]}>Custom Switch Button</Text>
            <View style={styles.switchContainer}>
                <CustomSwitch activeColor={'#FFA901'} inActiveColor={'#F2F5F7'} />
            </View>
            <View style={styles.switchContainer}>
                <CustomSwitch activeColor={'#92d7ef'} inActiveColor={'#F2F5F7'} />
            </View>
            <View style={styles.switchContainer}>
                <CustomSwitch activeColor={'#e3e5b3'} inActiveColor={'#F2F5F7'} />
            </View>
            <View style={styles.switchContainer}>
                <CustomSwitch activeColor={'#107980'} inActiveColor={'#F2F5F7'} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    text: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    marginBottom: {
        marginBottom: 10,
    },
    checkBox: {
        marginBottom: 10,
    },
    switchContainer: {
        marginVertical: 10,
    },
})