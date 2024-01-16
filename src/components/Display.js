import React from "react";
import {
    StyleSheet,
    Text,
    View,
    displayVelue
} from 'react-native'
const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: " rgba(0, 0, 0, 1)",
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 55,
        color: '#ffffff',

    }
}
)
export default props =>
    <View style={style.display}>
        <Text style={style.displayValue}
            numberOfLines={1}>{props.value} </Text>
    </View>