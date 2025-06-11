import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import HomeIcon from '../assets/svgs/home-icon.svg'
// import SearchIcon from '../assets/svgs/search-icon.svg'
// import SettingIcon from '../assets/svgs/settings-icon.svg'
// import ProfileIcon from '../assets/svgs/profile-icon.svg'
import HomeIcon from '../../assets/svg/home.svg'
import SearchIcon from '../../assets/svg/search.svg'
import SettingIcon from '../../assets/svg/setting.svg'
import ProfileIcon from '../../assets/svg/profile.svg'
import { Colors } from '../../constants'

const BottomTabIcon = ({ route, isFocused }) => {

    const renderIcon = (route, isFocused) => {
        let height = 34;
        let width = 34;

        switch (route) {
            case 'Home':
                return (
                    <HomeIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_WHITE}
                    />
                );
            case 'Search':
                return (
                    <SearchIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_WHITE}
                    />
                );
            case 'Setting':
                return (
                    <SettingIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_WHITE}
                    />
                );
            case 'Profile':
                return (
                    <ProfileIcon
                        width={width}
                        height={height}
                        fill={isFocused ? Colors.DEFAULT_SKY_BLUE : Colors.DEFAULT_WHITE}
                    />
                );

            default:
                break;
        }
    }

    return (
        <View>
            {renderIcon(route, isFocused)}
        </View>
    )
}

export default BottomTabIcon

const styles = StyleSheet.create({})