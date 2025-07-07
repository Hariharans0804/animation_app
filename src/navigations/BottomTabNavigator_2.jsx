import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Analytics, Home, Profile, Search, Wallet } from '../screens/bottomTabScreens_2';
import { CustomBottomTab_2 } from '../components';

const CustomBottomTabs_2 = (props) => {
    return <CustomBottomTab_2 {...props} />;
};

const BottomTabNavigator_2 = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={CustomBottomTabs_2}
        // screenOptions={{ headerShown: false, }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Analytics' component={Analytics} />
            <Tab.Screen name='Wallet' component={Wallet} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator_2

const styles = StyleSheet.create({})