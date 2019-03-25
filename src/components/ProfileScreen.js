import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import { Header } from './Header';

export class ProfileScreen extends Component {

    render() {
        return ( <View style={styles.container}>
                   <Header {...this.props} />

            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://scontent.fbom11-1.fna.fbcdn.net/v/t1.0-9/54524408_2105188312932572_947271302173949952_n.jpg?_nc_cat=107&_nc_ht=scontent.fbom11-1.fna&oh=ea2bea502dc834cdb85392da0d41a56e&oe=5D0818BB'}}/>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>ijhar ansari</Text>
                <Text style={styles.info}> Mobile developer</Text>
                
              </View>
          </View>
        </View>);
    }

}


const styles = StyleSheet.create({
    header:{
      backgroundColor: "steelblue",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
   