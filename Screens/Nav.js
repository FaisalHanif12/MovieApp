import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Discover from './Discover'
import Favorites from './Favorites'
import Moviesdetail from './Moviesdetail'
import Moviesdetails1 from './Moviesdetails1'
import Setting from './Setting'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
<NavigationContainer>
<Stack.Navigator
 screenOptions={{
     header: ()=> null
 }}
initialRouteName='Discover'>
<Stack.Screen  
name="Discover" component={Discover} 
/>
<Stack.Screen name="Favorites" component={Favorites} 
/>
<Stack.Screen name="Moviesdetails" component={Moviesdetail} 
/>
<Stack.Screen name="Moviesdetails1" component={Moviesdetails1} 
/>

<Stack.Screen name="Setting" component={Setting} 
/>
</Stack.Navigator>

</NavigationContainer>
  )
}

export default Nav;

const styles = StyleSheet.create({

})