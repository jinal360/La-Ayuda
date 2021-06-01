import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from './Screens/DonateScreen'
import RequestScreen from './Screens/RequestScreen'
import WelcomeScreen from './Screens/WelcomeScreen';
import LaAyuda from './components/LaAyuda.js'



export default function App() {
   return(
    <View>
     <AppContainer/>
    </View>
  )

}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  DonateScreen:{screen:DonateScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

const TabNavigator = createBottomTabNavigator({
 DonateItem: {
    screen: DonateScreen,
   tabBarIcon : <Image source={require("./assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    },
  RequestItem: {
    screen: RequestScreen,
        navigationOptions :{
      tabBarIcon : <Image source={require("./assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Request Item",
    }
  }
})


