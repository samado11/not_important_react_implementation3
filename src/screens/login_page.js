import React, { Component } from 'react';
import { Alert, TouchableOpacity , TextInput, View, StyleSheet,Text,ImageBackground,Image } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
        <ImageBackground source={require('../img/mainpage.png')} style={{width: '100%', height: '100%'}}> 
      <View style={styles.container}>
      <Image
          style={{width: 300, height: 100}}
          source={require('../img/logo1.png')}
        />

        <View>
        <Text style={[styles.text,{marginTop:50}]}> تسجيل دخول</Text>
        </View>
        
        <View style={styles.buttons}>
        <TouchableOpacity
        title={'user'}
         style={styles.button}
         onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.text}> مستخدم</Text>
       </TouchableOpacity>
       <TouchableOpacity
        title={'work'}
        style={styles.button}
         onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.text}> اعمال</Text>
       </TouchableOpacity>
       </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:60,
    
  },
  buttons:{
    justifyContent:'flex-end',
    flex:1
  },
  button:{
    backgroundColor:'#636e72',
    
    marginBottom:10,
    width: 350,
    opacity:0.5,
    height: 44,
    borderRadius:8,
    borderColor:'white',
    borderWidth:1
    
  },
  text: {
    color:'white',
    opacity:1,
    textAlign:'center',
    fontSize:24,
    fontFamily:'Cairo-Regular'
  },
  welcome:{
    color:'#e7e3da',
    textAlign:'center',
    marginBottom:50,
    fontSize:30,
    fontFamily:'Cairo-Regular'
    
  }

});
