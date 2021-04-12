import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
   Home: {
      screen: Home,
      navigationOptions: {
         title: "HCRK",
         // headerStyle: {
         //    backgroundColor: 'lightcoral'
         // }
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