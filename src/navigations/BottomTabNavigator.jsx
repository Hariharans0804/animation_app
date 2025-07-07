import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen, SearchScreen, SettingsScreen } from '../screens/bottomTabScreens';
import { CustomBottomTab } from '../components';

const CustomBottomTabs = (props) => {
    return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            // tabBar={props => <CustomBottomTab {...props} />}
            tabBar={CustomBottomTabs}
            screenOptions={{ headerShown: false, }}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Setting' component={SettingsScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator >
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})