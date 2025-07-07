import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from 'lucide-react-native'
import Animated, { FadeInRight, FadeOutRight, LayoutAnimationConfig, LinearTransition } from 'react-native-reanimated';
import { MotiView } from 'moti';
import { motifySvg } from 'moti/svg';
import { color } from 'd3';


const LucideIcon = ({ name, ...rest }) => {
    const IconComponent = icons[name];
    if (!IconComponent) return null;
    return <IconComponent size={16} {...rest} />;
}

const _spacing = 4;

const AnimatedTabsButton = ({
    data,
    selectedIndex,
    onChange,
    activeColor = '#fff',
    inActiveColor = '#999',
    activeBackgroundColor = '#111',
    inActiveBackgroundColor = '#ddd'
}) => {
    // console.log(data);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: _spacing }}>
            {data.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                    <Animated.View
                        key={`tab-${index}`}
                        style={{
                            backgroundColor: isSelected
                                ? activeBackgroundColor
                                : inActiveBackgroundColor,
                            borderRadius: 8,
                            overflow: 'hidden'
                        }}
                        layout={LinearTransition.springify().damping(80).stiffness(200)}
                    >
                        <Pressable
                            onPress={() => onChange(index)}
                            style={{
                                padding: _spacing * 3,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: _spacing,
                                // backgroundColor: isSelected
                                //     ? activeBackgroundColor
                                //     : inActiveBackgroundColor,
                                // borderRadius: 8,
                                // overflow:'hidden'
                            }}
                        >
                            <LucideIcon name={item.icon}
                                style={{
                                    color: isSelected ? activeColor : inActiveColor,
                                }}
                            />
                            <LayoutAnimationConfig skipEntering>
                                {isSelected && (
                                    <Animated.Text
                                        entering={FadeInRight.springify().damping(80).stiffness(200)}
                                        exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                                        style={{
                                            color: isSelected ? activeColor : inActiveColor,
                                        }}>
                                        {item.label}
                                    </Animated.Text>
                                )}
                            </LayoutAnimationConfig>
                        </Pressable>
                    </Animated.View>
                )
            })}
        </View>
    )
}

export default AnimatedTabsButton

const styles = StyleSheet.create({})