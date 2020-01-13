/**
 * @format
 */

import { Navigation } from "react-native-navigation";

import App from "./App";
import Social from './Screens/Socialinks'
import SwiperComponent from './Screens/Swiper'
import Carousel from './Screens/carousel'
import Modal from './Screens/modal'
import Login from './Screens/login'
import Profile from './Screens/profile'

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Social);
// Navigation.registerComponent('Social', () =>Social);
Navigation.registerComponent('SwiperComponent', () =>SwiperComponent);
Navigation.registerComponent('Carousel', () =>Carousel);
// Navigation.registerComponent('Modal', () =>Modal);
Navigation.registerComponent('Login', () =>Login);
Navigation.registerComponent('Profile', () =>Profile);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id:'AppStack',
        children:[
          {
            component:{
              name: "SwiperComponent"
            }
          }
        ]
       
      }
    }
  });
});