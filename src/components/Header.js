import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';




export  class Header extends Component {
    render() {
        return (<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'skyblue'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
                <Text>menu</Text>
            </TouchableHighlight>
        </View>);
    }
}