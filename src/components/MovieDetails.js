import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ListView,
    FlatList,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
    Platform  

  } from 'react-native';
  
  

export class MovieDetails extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          data:[
            { id:'1', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment1" ,likes:1},
            { id:'2', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'3', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'4', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'5', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'6', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'7', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'8', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'9', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
            { id:'10', image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
          ],
        };
      }
  static navigationOptions = {
    drawerLabel: () => null
   }


 

    render() {
        const  item = this.props.navigation.state.params.item
        return (   
<KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
            <View style={styles.container}>
            <View style={styles.inner}>

            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar} source={{uri: item.image }}/>
                  <Text style={styles.name}>{item.title}</Text>
              </View>

              <View style={styles.socialBarSection2}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                      </TouchableOpacity>
              </View>
            </View>
            <TextInput style={styles.inputs}
                  placeholder="full-name"
                  underlineColorAndroid='transparent'
                  onChangeText={(name) => this.setState({name})}/>

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
                  <TouchableHighlight >
                  <View style={styles.card}>
                 
                    <View style={styles.cardHeader}>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        
                      </View>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </TouchableHighlight>

                )
              }}/>
              </View >

        </View>
        </KeyboardAvoidingView>
   );
    }

}



const styles = StyleSheet.create({
    container:{
        flex:1,
        
      },
    header:{
      backgroundColor: "skyblue",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },

    avatar: {
      width: 300,
      height: 230,
      
      borderWidth: 4,
      borderColor: "#FF6347",
      marginBottom:10,
    },
   
    username:{
      color: "#20B2AA",
      fontSize:22,
      alignSelf:'center',
      marginLeft:10
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
      justifyContent: 'flex-end',
      flexDirection: 'row',
      flex: 1,
      padding:5
    },
    socialBarSection2: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      flex: 1,
      padding:10,
      marginRight: 20,
     
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
    },
    inner: {
      flex: 1,
      justifyContent: "flex-end",
  },
  
  }); 
  