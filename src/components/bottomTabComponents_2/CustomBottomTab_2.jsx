import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
} from "react-native-reanimated";

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

const PRIMARY_COLOR = "#130057";
const SECONDARY_COLOR = "#fff";

const CustomBottomTab_2 = ({ state, descriptors, navigation }) => {

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                if (["_sitemap", "+not-found"].includes(route.name)) return null;

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <AnimatedTouchableOpacity
                        layout={LinearTransition.springify().mass(0.5)}
                        key={route.key}
                        onPress={onPress}
                        style={[
                            styles.tabItem,
                            { backgroundColor: isFocused ? SECONDARY_COLOR : "transparent" },
                        ]}
                    >
                        {getIconByRouteName(
                            route.name,
                            isFocused ? PRIMARY_COLOR : SECONDARY_COLOR
                        )}
                        {isFocused && (
                            <Animated.Text
                                entering={FadeIn.duration(200)}
                                exiting={FadeOut.duration(200)}
                                style={styles.text}
                            >
                                {label}
                            </Animated.Text>
                        )}
                    </AnimatedTouchableOpacity>
                );
            })}
        </View>
    );


    function getIconByRouteName(routeName, color) {
        switch (routeName) {
            case "Home":
                return <Feather name="home" size={18} color={color} />;
            case "Search":
                return <AntDesign name="search1" size={18} color={color} />;
            case "Analytics":
                return <Feather name="pie-chart" size={18} color={color} />;
            case "Wallet":
                return <Ionicons name="wallet-outline" size={18} color={color} />;
            case "Profile":
                return <FontAwesome5 name="user-circle" size={18} color={color} />;
            default:
                return <Feather name="home" size={18} color={color} />;
        }
    }

}



export default CustomBottomTab_2




const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: PRIMARY_COLOR,
        width: "80%",
        alignSelf: "center",
        bottom: 40,
        borderRadius: 40,
        paddingHorizontal: 12,
        paddingVertical: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    tabItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        paddingHorizontal: 13,
        borderRadius: 30,
    },
    text: {
        color: PRIMARY_COLOR,
        marginLeft: 8,
        fontWeight: "500",
    },
})