import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Setting = ({ navigation }) => {
  return (
    <View style={styles.Body}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Discover')}
      >
        <Ionicons
          name='arrow-back-sharp'
          size={25}
          color='black'
          style={{ marginLeft: 20, marginTop: 12 }}

        />
      </TouchableOpacity>

      <Text
        style={styles.Display}
      >
        Setting
      </Text>

      <View style={styles.Line}>

      </View>

      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 40, marginTop: 30 }}>
        Sort by
      </Text>

      <Text style={{ fontSize: 18, color: 'black', marginLeft: 40, marginTop: 30 }}>
        Popularity
      </Text>

      <AntiDesign
        name='checkcircle'
        size={20}
        color='#009387'
        style={{marginLeft : 350, marginTop : -20}}

      />


      <View style={styles.Line1}>

      </View>


      <Text style={{ fontSize: 18, color: 'black', marginLeft: 40, marginTop: 20 }}>
        Rating
      </Text>

      <Entypo
        name='circle'
        size={20}
        color='black'
        style={{marginLeft : 350, marginTop : -20}}

      />


      <View style={styles.Line1}>

      </View>


      <Text style={{ fontSize: 18, color: 'black', marginLeft: 40, marginTop: 20 }}>
        Newest First
      </Text>

      <Entypo
        name='circle'
        size={20}
        color='black'
        style={{marginLeft : 350, marginTop : -20}}

      />


      <View style={styles.Line1}>

      </View>


      <Text style={{ fontSize: 18, color: 'black', marginLeft: 40, marginTop: 20 }}>
        Oldest First
      </Text>

      <Entypo
        name='circle'
        size={20}
        color='black'
        style={{marginLeft : 350, marginTop : -20}}

      />

      <View style={styles.Line1}>

      </View>

      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 45, marginTop: 10 }}>
        Genres
      </Text>

      <View style = {styles.daba}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Action
       </Text>
      </View>

      <View style = {styles.daba1}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Adventure
       </Text>
      </View>

      <View style = {styles.daba2}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Animation
       </Text>
      </View>

      <View style = {styles.daba3}>
       <Text style={{marginLeft: 9, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Comedy
       </Text>
      </View>
      
      <View style = {styles.daba4}>
       <Text style={{marginLeft: 9, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Crime
       </Text>
      </View>

      <View style = {styles.daba5}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Documentory
       </Text>
      </View>

      <View style = {styles.daba}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         drama
       </Text>
      </View>

      <View style = {styles.daba}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Horror
       </Text>
      </View>

      <View style = {styles.daba6}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Science Fiction
       </Text>
      </View>

      <View style = {styles.daba}>
       <Text style={{marginLeft: 17 , marginTop: 5, fontWeight: 'bold', color:'black'}}>
         War
       </Text>
      </View>

      <View style = {styles.daba7}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Family
       </Text>
      </View>

      <View style = {styles.daba8}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Fantasy
       </Text>
      </View>

      <View style = {styles.daba9}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         History
       </Text>
      </View>

      <View style = {styles.daba10}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Music
       </Text>
      </View>

      <View style = {styles.daba11}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Mystery
       </Text>
      </View>

      <View style = {styles.daba12}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Romance
       </Text>
      </View>

      <View style = {styles.daba13}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Tv Movie
       </Text>
      </View>

      <View style = {styles.daba14}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Thriller
       </Text>
      </View>

      <View style = {styles.daba15}>
       <Text style={{marginLeft: 10, marginTop: 5, fontWeight: 'bold', color:'black'}}>
         Western
       </Text>
      </View>


      <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 50, marginTop: 10 }}>
        Year
      </Text>

      <View style = {styles.Line}>

      </View>

     
      <TouchableOpacity 
        style ={{backgroundColor : 'black', width : '75%', height : 45 , marginTop : 20, marginLeft : 50, borderRadius : 10}}
      >
            <Text style = {{color : 'white' , fontWeight : 'bold', marginLeft : 133, marginTop : 8, fontSize : 18}}>
              Save
            </Text>
      </TouchableOpacity>
    

    </View>
  )
}

export default Setting;

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Display: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'simple',
    marginLeft: 175,
    marginBottom: 10,
    marginTop: -29
  },
  Line: {
    borderWidth: 0.3,
    borderColor: 'lightgrey',
  },
  Line1: {
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    width: '90%',
    marginLeft: 30,
    marginTop: 10
  },
  daba:{
    width : 67,
    height: 36,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 45,
    fontWeight : 'bold',
  },
  daba1:{
    width : 85,
    height: 35,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -35,
    marginLeft: 128,
    fontWeight : 'bold',
  },
  daba2:{
    width : 85,
    height: 35,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -35,
    marginLeft: 235,
    fontWeight : 'bold',
  },
  daba3:{
    width : 70,
    height: 36,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 45,
    fontWeight : 'bold',
  },

  daba4:{
    width : 70,
    height: 36,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -36,
    marginLeft: 137,
    fontWeight : 'bold',
  },
  daba5:{
    width : 100,
    height: 35,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -35,
    marginLeft: 235,
    fontWeight : 'bold',
  },
  daba6:{
    width : 117,
    height: 36,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 45,
    fontWeight : 'bold',
  },
  daba7:{
    width : 67,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -174,
    marginLeft: 125,
    fontWeight : 'bold',
  },

  daba8:{
    width : 67,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -34,
    marginLeft: 205,
    fontWeight : 'bold',
  },
  daba9:{
    width : 67,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -34,
    marginLeft: 285,
    fontWeight : 'bold',
  },
  daba10:{
    width : 67,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 14,
    marginLeft: 120,
    fontWeight : 'bold',
  },
  daba11:{
    width : 67,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -34,
    marginLeft: 195,
    fontWeight : 'bold',
  },
  daba12:{
    width : 73,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -33,
    marginLeft: 280,
    fontWeight : 'bold',
  },

  daba13:{
    width : 77,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 11,
    marginLeft: 170,
    fontWeight : 'bold',
  },

  daba14:{
    width : 70,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: -32,
    marginLeft: 265,
    fontWeight : 'bold',
  },

  daba15:{
    width : 70,
    height: 34,
    borderWidth:1,
    borderColor:'black',
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 125,
    fontWeight : 'bold',
  },
})