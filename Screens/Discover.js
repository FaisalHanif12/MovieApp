import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-gesture-handler';


const Posters = [

    {
        name: "Puss in Boots;The last W...",
        image: require("../Images/eng.jpeg"),
        icons: 'star',
        Evil: 'star',
        secondname: "Animation, Adventure ",
    },

    {
        name: "knock at the cabin",
        image: require("../Images/Iconic.jpeg"),
        icons: 'star',
        Evil: 'star',
        secondname: "Horror, Mystery"
    },

    {
        name: "Black Panther.Wakanda F...",
        image: require("../Images/spider.jpeg"),
        icons: 'star',
        Evil: 'star',
        secondname: "Action, Adventure "
    },

    {
        name: "Die Hart",
        image: require("../Images/thor.jpeg"),
        icons: 'star',
        Evil: 'star',
        secondname: "Action, Comedy"
    },


];
const Discover = ({ navigation }) => {

    const [selectedtab, setselectedtab] = useState(0);
    return (
        <View style={styles.Body}>
            <Text
                style={styles.Display}
            >
                Discover
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Setting')}
                  
            >
                <Feather
                    name='settings'
                    size={25}
                    color='#009387'
                    style={{ marginLeft: 370, marginTop: -38 }}
                />
            </TouchableOpacity>
            <View style={styles.Line}>

            </View>

            <ScrollView>

                {Posters.map((post, index) => (



                    <View
                        key={index}

                    >
                        <Image

                            source={post.image}

                            style={{ borderRadius: 15, width: 150, height: 210, marginTop: 10, marginLeft: 10 }}
                        />

                        <View>
                            <Text style={{ color: 'black', fontWeight: '500', marginTop: -200, marginLeft: 180, fontSize: 17, marginBottom: 15 }}>
                                {post.name}
                            </Text>
                        </View>

                        <View>
                            <Entypo
                                name={post.icons}
                                size={25}
                                color='#009387'
                                style={{ marginLeft: 178, marginTop: -182 }}
                            />
                        </View>


                        <View>
                            <Entypo
                                name={post.icons}
                                size={25}
                                color='#009387'
                                style={{ marginLeft: 202, marginTop: -182 }}
                            />
                        </View>


                        <View>
                            <Entypo
                                name={post.icons}
                                size={25}
                                color='#009387'
                                style={{ marginLeft: 225, marginTop: -182 }}
                            />
                        </View>


                        <View>
                            <Entypo
                                name={post.icons}
                                size={25}
                                color='#009387'
                                style={{ marginLeft: 248, marginTop: -182 }}
                            />
                        </View>


                        <View>
                            <EvilIcons
                                name={post.Evil}
                                size={28}
                                color='#009387'
                                style={{ marginLeft: 271, marginTop: -179 }}
                            />
                        </View>

                        <View>
                            <Text style={{ color: 'black', fontWeight: '500', marginLeft: 180, marginTop: -160, fontSize: 17 }}>
                                {post.secondname}
                            </Text>
                        </View>



                    </View>



                )



                )

                }

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
                        style={{ marginLeft: 80, marginTop: 9 , color: selectedtab == 1 ? 'grey' : '#009387', }}
                    />


                    <Text
                        style={{ marginLeft: 65, marginTop: 5,   color: selectedtab == 1 ? 'grey' : '#009387', fontWeight: 'bold' }}
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
                        style={{ marginLeft: 310, marginTop: -48, marginBottom: 10 }}
                    />

                    <Text
                        style={{ marginLeft: 294, color: 'black', fontWeight: 'bold', marginTop: -10, width: 70, height: 20 }}
                    >
                        Favorites
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

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

export default Discover;
