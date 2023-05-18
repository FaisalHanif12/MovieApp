import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-gesture-handler';



const Favorites = ({navigation}) => {

  const [selectedtab, setselectedtab] = useState(0);

  return (

    
    <View style={styles.Body}>
      <Text
        style={styles.Display}
      >
        Favorites
      </Text>

      <View style={styles.Line}>

      </View>

     <ScrollView>
      <View>
      <Image
        source={require('../Images/eng.jpeg')}
        style={{ marginBottom : 40 , marginTop : 5, marginLeft : 15,  width : 180 , height : 258 , borderRadius : 20}}
      />

      <Text 
       style = {{color:'black', fontSize : 18 , fontWeight : 'bold', marginTop : -31 , marginLeft : 20, marginBottom : 29}}
      >
        Fall
      </Text>
      </View>
      
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Moviesdetails')}
      >
      <Image
        source={require('../Images/Iconic.jpeg')}
        style={{ marginTop : -320 , borderRadius : 20, marginLeft : 210, width : 180 , height : 258 , marginBottom : 12}}
      />
        <Text 
       style = {{color:'black', fontSize : 18 , fontWeight : 'bold', marginTop : -52 , position : 'absolute', marginLeft : 212}}
      >
        Black Panther
      </Text>
      </TouchableOpacity>

        <View>
      <Image
        source={require('../Images/spider.jpeg')}
        style={{marginBottom : 5 , borderRadius : 20, marginTop : -10, marginLeft : 15,  width : 180 , height : 260 ,}}
      />
        <Text 
       style = {{color:'black', fontSize : 18 , fontWeight : 'bold', marginTop : 248 , marginLeft : 17, marginBottom : 27 , position : 'absolute'}}
      >
        Jurassic World 
      </Text>

      <Text style ={{color:'black', fontSize : 18 , fontWeight : 'bold', marginTop : 15 , marginLeft : 17, marginBottom : 31}}>
        Domain
      </Text>
      </View>

      <View>
      <Image
        source={require('../Images/thor.jpeg')}
        style={{marginTop : -335 , borderRadius : 20, marginLeft : 210, width : 180 , height : 258}}
      />
        <Text 
       style = {{color:'black', fontSize : 18 , fontWeight : 'bold', marginTop : -70 , marginLeft : 212, marginBottom : 27, position : 'absolute'}}
      >
        Somebody I used to know 
      </Text>
      </View>

      </ScrollView>

      <View style={styles.BhotomBar}>

<TouchableOpacity
    onPress={() => {
      setselectedtab(0)
    }}
    onPressIn={() => navigation.navigate('Discover')}
>
    <AntiDesign
        name='find'
        size={25}
        color='black'
        style={{ marginLeft: 80, marginTop: 9 , color: selectedtab !== 1 ? 'grey' : '#009387', }}
    />


    <Text
        style={{ marginLeft: 65, marginTop: 5,   color: selectedtab !== 1 ? 'grey' : '#009387', fontWeight: 'bold' }}
     
   >
        Discover
    </Text>
</TouchableOpacity>



<TouchableOpacity
    onPress={() => {
       setselectedtab(0)
    }}
    onPressIn={() => navigation.navigate('Favorites')}
>
    <AntiDesign
        name='hearto'
        size={28}
        color='black'
        style={{ marginLeft: 310, marginTop: -48, marginBottom: 10,  color: selectedtab == 1 ? 'lightgrey' : '#009387', }}
    />

    <Text
        style={{ marginLeft: 294, color: selectedtab == 1 ? 'grey' : '#009387', fontWeight: 'bold', marginTop: -10, width: 70, height: 20 ,  }}
    >
        Favorites
    </Text>
</TouchableOpacity>

</View>


    </View>
  )
}

export default Favorites;

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
    marginLeft: 155,
    marginTop: 10,
    marginBottom: 10,
  },
  Line: {
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  BhotomBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    position: 'absolute',
    marginTop: 700,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
}

})