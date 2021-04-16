import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react'

const screens = {
   Home: {
      screen: Home,
      navigationOptions: ({navigation}) =>{
         return {
            headerTitle: () => <Header navigation={navigation} title='HCRK'/>
   }
      }
   },
   ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {
         title: "Reviews",
         // headerStyle: {
         //    backgroundColor: 'lightcoral'
         // }
      }
   },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
         backgroundColor: 'darkblue',
         height: 60,
      }
   }
});

export default createAppContainer(HomeStack);