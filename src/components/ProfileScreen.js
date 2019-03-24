import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
//import { Header } from './header';

export class ProfileScreen extends Component {

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
        
            <View style={{
                flex: 1,
                backgroundColor: 'steelblue',   
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 30, color: 'white' }}>
                    I am Profile
                </Text>
                
            </View>
        </View>);
    }

}