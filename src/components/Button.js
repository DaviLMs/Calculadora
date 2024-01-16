import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

const style = StyleSheet.create({
    button: {
        fontSize: 35,
        color: '#ffffff',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#1b1b1b',
        textAlign: 'center',
        borderWidth: 0.4,
        borderColor: '#474747',


    },
    operationButton: {
        color: "#ffffff",
        backgroundColor: '#da8536',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})
export default props => {
    const styleButton = [style.button]
    if (props.double) styleButton.push(style.buttonDouble)
    if (props.triple) styleButton.push(style.buttonTriple)
    if (props.operation) styleButton.push(style.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}