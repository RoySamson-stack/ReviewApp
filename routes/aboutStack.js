import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
       About: {
              screen: About,
              navigationOptions: ({ navigation }) => {
                     return {
                            headerTitle: () => <Header navigation={navigation} title="About HCRK "/>
                     }
              },
       }
};

// home stack navigator screens
const AboutStack = createStackNavigator(screens, {
       defaultNavigationOptions: {
              headerTintColor: "white",
              headerStyle: {
                     backgroundColor: 'darkblue',
                     height: 60,
              }
       }
});

export default AboutStack;