import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Calls, Chat, Contacts, MyProfile, SavedMessage, Settings } from '../screens/drawerScreens';
import BottomTabNavigator from './BottomTabNavigator';
import { ImageCarouselScreen } from '../screens/singleScreens';


const RootNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            detachPreviousScreen: false
        }}>
            <Stack.Screen name='Chat' component={Chat} />
            <Stack.Screen name='MyProfile' component={MyProfile} />
            <Stack.Screen name='Contacts' component={Contacts} />
            <Stack.Screen name='Calls' component={Calls} />
            <Stack.Screen name='SavedMessage' component={SavedMessage} />
            <Stack.Screen name='Settings' component={BottomTabNavigator} />
            <Stack.Screen name='ImageCarousel' component={ImageCarouselScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})