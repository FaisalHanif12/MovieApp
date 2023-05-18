import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Posters = [

  {
    image: require("../Images/eng.jpeg"),
    name: 'Latita',
  },

  {
    image: require("../Images/Iconic.jpeg"),
    name: 'Write',
  },

  {
    image: require("../Images/spider.jpeg"),
    name: 'Lorum',
  },

  {
    image: require("../Images/thor.jpeg"),
    name: 'Nyong',
  },


];
const Moviesdetail = ({navigation}) => {
  return (
    <View style={styles.Body}>
      
      <TouchableOpacity 
       onPress={()=> navigation.navigate('Favorites')}
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
        Black Panther
      </Text>

      <View>
        <Ionicons
          name='heart'
          size={25}
          color='#009387'
          style={{ marginLeft: 370, marginTop: -35 }}

        />
      </View>

      <View style={styles.Line}>

      </View>


      <TouchableOpacity
       onPress={()=> navigation.navigate('Moviesdetails1')}
      >
        <Image
          source={require('../Images/thor.jpeg')}
          style={{ marginTop: 0, marginLeft: 65, width: 270, height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        />

      </TouchableOpacity>

      <View style={{ marginTop: 14, marginLeft: -28 }}>

        <View>
          <Entypo
            name='star'
            size={25}
            color='#009387'
            style={{ marginLeft: 178, marginTop: 2 }}
          />
        </View>

        <View>
          <Entypo
            name='star'
            size={25}
            color='#009387'
            style={{ marginLeft: 202, marginTop: -26 }}
          />
        </View>


        <View>
          <Entypo
            name='star'
            size={25}
            color='#009387'
            style={{ marginLeft: 225, marginTop: -26 }}
          />
        </View>


        <View>
          <Entypo
            name='star'
            size={25}
            color='#009387'
            style={{ marginLeft: 248, marginTop: -26 }}
          />
        </View>


        <View>
          <EvilIcons
            name='star'
            size={28}
            color='#009387'
            style={{ marginLeft: 271, marginTop: -22 }}
          />
        </View>

      </View>

      <View style={{ marginLeft: 100, marginTop: 10 }}>
        <Text style={{}}>
          2022. Action, Adventure . 02h 42m
        </Text>
      </View>

      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 40, marginTop: 10 }}>
        OverView
      </Text>

      <Text style={{ marginLeft: 40, marginTop: 10 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere tincidunt dictum. Donec mattis maximus odio sit amet faucibus. Phasellus pretium blandit nulla, id convallis orci accumsan vitae. Duis porta sapien odio, rhoncus mattis tortor blandit elementum. Ut a urna arcu. Pellentesque hendrerit leo blandit felis mollis interdum
      </Text>

      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 40, marginTop: 20 }}>
        Cast
      </Text>

        <ScrollView 
          horizontal = {true}
          style = {{marginLeft : 12, marginTop : 10}}
        >
      {Posters.map((post, index) => (
        <View
          key={index}
        >

          <Image

            source={post.image}

            style={{ borderRadius: 50, width: 100, height: 100, marginTop: 10, marginLeft: 10 }}
          />

          <View>
            <Text style={{ color: 'black', fontWeight: '500', fontSize: 17, marginBottom: 15, marginLeft : 34, marginTop: 10 }}>
              {post.name}
            </Text>
          </View>

        </View>
      ))

      }

</ScrollView>

    </View>
  )
}

export default Moviesdetail;

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
    marginLeft: 135,
    marginBottom: 10,
    marginTop: -29
  },
  Line: {
    borderColor: 'black',
    borderWidth: 0.2,
  },

})