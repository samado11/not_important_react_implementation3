/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Icon3 from 'react-native-vector-icons/Fontisto';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Navigation } from 'react-native-navigation'

class Social extends Component {
    constructor() {
        super();
        this.state = {
                            data: "",
                            token: ""};
                            this.getData()
      }
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
  async getData () {
    let value = await AsyncStorage.getItem('User')
    let token = await AsyncStorage.getItem('Token')
     value =JSON.parse(value)
     token =JSON.parse(token)
     this.setState({
         data:value,
         token:token
     })
     console.log(this.state.data);
     
  }
  async logout(res) {
    try{
        let tok = await AsyncStorage.getItem('Token')
    const data= {
        token:tok
      }
      console.log("Bearer " + tok.split(`"`)[1]);
      
    await axios.post('https://a-market.herokuapp.com/logout',data, { headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + tok.split(`"`)[1],
        'Accept-Language': 'ar'
      }}).then(async(data) => {
        this.goToScreen('Login')
      }).catch((error)=>{
        console.log(error.response.data);
        alert(error.response.data.errors);
     }); 
    }
    catch(error){
        console.log(error)
    }
}
  
  render() {
    return (
                    <View style={{backgroundColor:"#ffdd59",flex:1,justifyContent:"space-between"}}>
                    <View style={{ flexDirection: 'column', marginTop: "4%" ,alignItems: 'center'}}>
                    <Image style={{ width: 160, height: 160, borderRadius: 80 }} source={require('../src/imgs/1.jpg')} />
                      <Text style={{ fontSize: 28,fontWeight:"bold",color:"white" }}>{this.state.data.username}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: "6%",marginLeft:"6%"}}>
                        <View style={{flexDirection: 'row'}}>
                        <Icon3 style={{ paddingRight: 8 }} name="email" size={30} color="#10ac84" />
                        <Text style={{ fontSize: 20,color:"#485460"}}>{this.state.data.email}</Text>

                        </View>
                        <View style={{flexDirection: 'row',marginTop:"4%"}}>
                        <Icon3 style={{ paddingRight: 8 }} name="phone" size={30} color="#10ac84" />
                    <Text style={{ fontSize: 20,color:"#485460" }}>{this.state.data.phone}</Text>
                    </View>
                      
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => this.goToScreen('Carousel')} style={{ backgroundColor: "#00b3e6", borderRadius: 10, padding: 4, marginTop: "6%",width:"60%",alignSelf:"center" }}>
                    <View >
                      <Text style={{ color: "white", justifyContent: "center", fontSize: 18 }}>  Carousel</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.logout()} style={{ backgroundColor: "#ff3f34", borderRadius: 10, padding: 4, marginTop: "6%",width:"60%",alignSelf:"center" }}>
                    <View >
                      <Text style={{ color: "white", justifyContent: "center", fontSize: 18 }}>  Logout</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                    </View>
)
  }
}
//onPress={()=>this.goToScreen('Carousel')}


export default Social;
