import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image ,Button} from 'react-native';
//import { Header } from './header';

export class SignInScreen extends Component {

  _signUpAsync = async () => {

    this.props.navigation.navigate('Home');
  };

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
                    Login here
                </Text>
                <Button title="Home" onPress={this._signUpAsync} />
                
            </View>
        </View>);
    }

}