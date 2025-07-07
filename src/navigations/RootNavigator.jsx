import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Calls, Chat, Contacts, MyProfile, SavedMessage, Settings } from '../screens/drawerScreens';
import BottomTabNavigator from './BottomTabNavigator';
import { AnimatedTabsScreen, ImageCarouselScreen, } from '../screens/singleScreens';
import BottomTabNavigator_2 from './BottomTabNavigator_2';

const RootNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            detachPreviousScreen: false
        }}>
            {/* Drawer screens */}
            <Stack.Screen name='Chat' component={Chat} />
            <Stack.Screen name='MyProfile' component={MyProfile} />
            <Stack.Screen name='Contacts' component={Contacts} />
            <Stack.Screen name='Calls' component={Calls} />
            <Stack.Screen name='SavedMessage' component={SavedMessage} />

            {/* Bottom tabs screens */}
            <Stack.Screen name='Settings' component={BottomTabNavigator} />
            <Stack.Screen name='BottomTabs_2' component={BottomTabNavigator_2} />

            {/* Single screens animation    */}
            <Stack.Screen name='ImageCarousel' component={ImageCarouselScreen} />
            <Stack.Screen name='AnimatedTabs' component={AnimatedTabsScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})