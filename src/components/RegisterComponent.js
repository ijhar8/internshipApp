import React, { Component } from 'react';
//import { View, Text, TouchableHighlight, Image } from 'react-native';
//import { Header } from './header';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';

export class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        state = {
          name:'',  
          email   : '',
          password: '',
        }
      }
    
    
      _signUpAsync = async () => {
    
        this.props.navigation.navigate('Home');
      };

    render() {
        return ( <View style={styles.container}>
             <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="full-name"
                  underlineColorAndroid='transparent'
                  onChangeText={(name) => this.setState({name})}/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
    
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={this._signUpAsync}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableHighlight>
   
          </View>);
    }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'steelblue',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });