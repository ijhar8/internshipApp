import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer ,createDrawerNavigator} from 'react-navigation';
import { Header } from './Header';
import { SignInScreen } from './LoginComponent';
import { SignUpScreen } from './RegisterComponent';
import { HomeScreen } from './HomeScreen';
import { ProfileScreen } from './ProfileScreen';
import { MovieDetails } from './MovieDetails';


class AuthScreen extends React.Component {

  static navigationOptions = {
    title: 'login/register',
  };

  render() {
    return (
      <View style={styles.container}>
       
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._signInAsync}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._signUpAsync}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
      

      </View>
    );
  }

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };

  _signInAsync = async () => {
    this.props.navigation.navigate('SignIn');
  };
  _signUpAsync = async () => {

    this.props.navigation.navigate('SignUp');
  };
}

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome to the app!',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
              
//         <Button title="Show me more of the app" onPress={this._showMoreApp} />
//         <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//       </View>
//     );
//   }

//   _showMoreApp = () => {
//     this.props.navigation.navigate('Other');
//   };

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }

// class OtherScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Lots of features here',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }

//   _signOutAsync = async () => {
//     await AsyncStorage.clear();
//     this.props.navigation.navigate('Auth');
//   };
// }

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

const AppStack = createDrawerNavigator(
  {
     Home: HomeScreen,
     Profile: ProfileScreen,
     MovieDetails: MovieDetails,



  });
const AuthStack = createStackNavigator(
  {
     MainAuth: AuthScreen ,
     SignUp:SignUpScreen,
     SignIn:SignInScreen,

     
  });
// const OtherStack = createStackNavigator(
//     {
//        MovieDetails: MovieDetails,
       
       
//     });
  
  

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
   
  },
  {
    initialRouteName: 'AuthLoading',
  }
));


