import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/FontAwesome';




export  class Header extends Component {
    render() {
        return (<View style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'skyblue'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 5 }}
                onPress={() => { this.props.navigation.openDrawer() }}>
            
                <Image
                       source={require('../assets/drawer.png')}
                       style={{ height: 25, width : 25 }}
                   />
            </TouchableHighlight>
        </View>);
    }
}