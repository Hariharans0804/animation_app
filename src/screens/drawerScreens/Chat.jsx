import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Images } from '../../constants';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { profileImages } from '../../data/data';
import { Drawer, Header, Overlay } from '../../components';


const Chat = () => {

  const [chatList, setChatList] = useState([
    { id: 1, name: "Hari", email: "hari@gmail.com" },
    { id: 2, name: "Vishwa", email: "vishwa@gmail.com" },
    { id: 3, name: "Ram", email: "ram@gmail.com" },
    { id: 4, name: "Sathish", email: "sathish@gmail.com" },
    { id: 5, name: "Mukilan", email: "mukilan@gmail.com" },
    { id: 6, name: "Jayaram", email: "jayaram@gmail.com" },
    { id: 7, name: "Ruban", email: "ruban@gmail.com" },
    { id: 8, name: "Dhaya", email: "dhaya@gmail.com" },
    { id: 9, name: "Arun", email: "arun@gmail.com" },
    { id: 10, name: "Ajith", email: "ajith@gmail.com" },
    { id: 11, name: "Viruman", email: "viruman@gmail.com" },
    { id: 12, name: "Kasi", email: "kasi@gmail.com" },
    { id: 13, name: "Anbu", email: "anbu@gmail.com" },
    { id: 14, name: "Muthu", email: "muthu@gmail.com" },
    { id: 15, name: "Sasi", email: "sasi@gmail.com" },
    { id: 16, name: "Moorthi", email: "moorthi@gmail.com" },
    { id: 17, name: "Vetri", email: "vetri@gmail.com" },
    { id: 18, name: "Praveen", email: "praveen@gmail.com" },
    { id: 19, name: "Vicky", email: "vicky@gmail.com" },
    { id: 20, name: "Jhon", email: "jhon@gmail.com" },
  ]);
  // console.log(chatList);


  const active = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return withTiming(active.value ? 1 : 0);
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -15],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        { perspective: 1000 },
        { scale: active.value ? withTiming(0.8) : withTiming(1) },
        { translateX: active.value ? withSpring(240) : withTiming(0) },
        { rotateY: `${rotateY}deg`, }
      ],
      borderRadius: active.value ? withTiming(20) : withTiming(0),
    };
  });

  const renderItem = ({ item, index }) => {

    const profileImage = profileImages[index % profileImages.length]; // Use modulo for safety

    return (
      <View style={styles.row}>
        <View style={styles.column1}>
          <Image /*source={Images.PROFILE1}*/ source={profileImage} resizeMode="contain" style={styles.image} />
        </View>
        <View style={styles.column2}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.email}</Text>
        </View>
        <View style={styles.column3}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  return (
    <>
      <Drawer active={active} />
      <Animated.View style={[styles.container, animatedStyle]}>

        <Header active={active} />

        <View style={styles.header}>
          <View style={styles.column1}>
            <Text style={styles.heading}>Img</Text>
          </View>
          <View style={styles.column2}>
            <Text style={[styles.heading, { paddingLeft: 50 }]}>Name</Text>
          </View>
          <View style={styles.column3}>
            <Text style={styles.heading}>Details</Text>
          </View>
        </View>

        <FlatList
          data={chatList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />

        <Overlay active={active} />

      </Animated.View>
    </>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_DARK_BLUE
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_DARK_GRAY,
    borderRadius: 20
  },
  heading: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    // borderWidth: 1,
    // borderColor: Colors.DEFAULT_WHITE,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: Colors.DEFAULT_DARK_GRAY,
  },
  column1: {
    flex: 1.5,
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderColor: Colors.DEFAULT_WHITE,
  },
  column2: {
    flex: 3,
    alignItems: 'flex-start',
    // borderBottomWidth: 1,
    // borderColor: Colors.DEFAULT_WHITE,
  },
  column3: {
    flex: 1.5,
    alignItems: 'flex-start',
    // borderBottomWidth: 1,
    // borderColor: Colors.DEFAULT_WHITE,
  },
  text: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE
  },
  button: {
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
    padding: 10,
  },
})