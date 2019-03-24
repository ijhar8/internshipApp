import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
//import { Header } from './header';

export class SignUpScreen extends Component {

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
                    register here
                </Text>
                
            </View>
        </View>);
    }

}