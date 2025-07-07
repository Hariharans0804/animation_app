import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemList_2 = ({ color }) => {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            {Array.from({ length: 4 }).map((_, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            width: "80%",
                            height: 120,
                            backgroundColor: color,
                            marginTop: 12,
                            borderRadius: 20,
                            opacity: 1 - index * 0.3,
                        }}
                    />
                );
            })}
        </View>
    );
}

export default ItemList_2

const styles = StyleSheet.create({})