import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about'

const screens = {
       About: {
              screen: About,
              navigationOptions: {
                     title: "About",
                     // headerStyle: {
                     //    backgroundColor: 'lightcoral'
                     // }
              }
       },
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