import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    TouchableHighlight,
    Button
  } from 'react-native';

import { Header } from './Header';
//import { TouchableHighlight } from 'react-native-gesture-handler';

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:'1', title: "movie1",         image:"https://lorempixel.com/400/200/nature/6/", description:"description"},
            {id:'2', title: "movie2",         image:"https://lorempixel.com/400/200/nature/5/", description:"description"} ,
            {id:'3', title: "movie3",         image:"https://lorempixel.com/400/200/nature/4/", description:"description"}, 
            {id:'4', title: "movie4",         image:"https://lorempixel.com/400/200/nature/6/", description:"description"}, 
            {id:'5', title: "movie5",         image:"https://lorempixel.com/400/200/sports/1/", description:"description"}, 
            {id:'6', title: "movie6",         image:"https://lorempixel.com/400/200/nature/8/", description:"description"}, 
            {id:'7', title: "movie7",         image:"https://lorempixel.com/400/200/nature/1/", description:"description"}, 
            {id:'8', title: "movie8",         image:"https://lorempixel.com/400/200/nature/3/", description:"description"},
            {id:'9', title: "movie9",         image:"https://lorempixel.com/400/200/nature/4/", description:"description"},
          ]
        };
      }

      clickEventListener =  (param) => {
//    alert(param)

       this.props.navigation.navigate('MovieDetails',{ item: param });
      };

    render() {
        return (<View style={styles.container}>
                   <Header {...this.props} />
          
            <FlatList style={styles.list}
              data={this.state.data}
              keyExtractor= {(item) => {
                return item.id;
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View style={styles.separator}/>
                )
              }}
              renderItem={(post) => {
                const item = post.item;
                return (
                    <TouchableHighlight onPress={() => {this.clickEventListener(item)}} >
                  <View style={styles.card}>
                 
                    <Image style={styles.cardImage} source={{uri:item.image}}/>
                    <View style={styles.cardHeader}>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        
                      </View>
                    </View>
 
                  </View>
                  </TouchableHighlight>

                )
              }}/>
          </View>);
    }

}


const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor:"#4682b4",
    },  
    separator: {
      marginTop: 10,
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"white"
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
      backgroundColor:"#EEEEEE",
    },
    cardImage:{
      flex: 1,
      height: 150,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:18,
      flex:1,
    }, 
    description:{
      fontSize:15,
      color:"#888",
      flex:1,
      marginTop:5,
      marginBottom:5,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    iconData:{
      width:15,
      height:15,
      marginTop:5,
      marginRight:5
    },
    timeContainer:{
      flexDirection:'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }); 