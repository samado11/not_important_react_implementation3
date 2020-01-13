import axios from 'axios';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import AsyncStorage from '@react-native-community/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  Form,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';
const {width,height}=Dimensions.get('window')

class Login extends Component {
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
    constructor() {
        super();
        this.state = {
                            email: " ",
                            password: " "};
      }
      emailHandler = (event) => {
        this.setState({email: event.nativeEvent.text});
        // console.log(this.state.email)
      }
      passwordHandler = (event) => {
        this.setState({password: event.nativeEvent.text});
        // console.log(this.state.password)
      }
    async login(res) {
        try{
        console.log(this.state);
        const { email, password } = this.state;
        const data= {
            email:email,
            password: password,
            type:"CLIENT"
          }
        await axios.post('https://a-market.herokuapp.com/usersignin',data, { headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'ar'
          }}).then(async(data) => {
            console.log(data);
            await AsyncStorage.setItem('User', JSON.stringify(data.data.user))
            await AsyncStorage.setItem('Token', JSON.stringify(data.data.token))
            // console.log(await AsyncStorage.getItem('User'))
            this.goToScreen('Profile')
          }).catch((error)=>{
             console.log("Api call error");
             alert(error.response.data.errors);
          });
          
        }
        catch(error){
            console.log('There has been a problem with your fetch operation')
        }
    }
  render(){
    return(
        <View style={{backgroundColor:"#ffdd59",height:"100%"}}>
     <View style={{flexDirection:"column",top:0.4*height,width:"90%",alignSelf:"center"}}>
         <TextInput onChange={this.emailHandler} style={{width:"100%",height:0.06*height,borderRadius:30,borderWidth:2,borderColor:"white" }} placeholder="    Enter your e-mail"></TextInput>
         <TextInput onChange={this.passwordHandler} style={{width:"100%",height:0.06*height,borderRadius:30,borderWidth:2,borderColor:"#c23616",marginTop:20}} placeholder="    Enter Password" secureTextEntry={true}></TextInput>
         <TouchableOpacity  onPress={()=>this.login()}  style={{backgroundColor:"#192a56",borderRadius: 20,padding:4,width:"30%",alignSelf:"flex-start",marginTop:20}}>
         <View >
         <Text style={{color:"white",alignSelf:"center",fontSize: 18}}> Login</Text>
         </View>
       </TouchableOpacity>

     </View>
     </View>
    )
  }
}


export default Login;
