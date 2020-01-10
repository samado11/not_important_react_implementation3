import React, { Component } from 'react';
import { Alert, TouchableOpacity , TextInput, View, StyleSheet,Text,ImageBackground,Image } from 'react-native';


export default class SignupLogin extends Component {
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
    const {navigate} = this.props.navigation;
    return (
        <ImageBackground source={require('../img/mainpage.png')} style={{width: '100%', height: '100%'}}> 
      <View style={styles.container}>
      <Image
          style={{width: 300, height: 100}}
          source={require('../img/logo1.png')}
        />
        <View style={{justifyContent:'flex-end',flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
        title={'ar'}
        style={styles.but}
        onPress={() => navigate('Login1')}
       >
         <View style={styles.button}>
         </View>
         <View style={{position:"absolute",alignItems: 'center'}}>
         <Image style={{width: 30, height: 48}} source={require('../img/keyhole.png')}/>
         <Text style={styles.text}> تسجيل جديد</Text>
         
         </View>
       </TouchableOpacity>
       <TouchableOpacity
        title={'en'}
        style={styles.but}
        onPress={() => navigate('Login')}
       >
         <View style={styles.button}>
         </View>
         <View style={{position:"absolute",alignItems: 'center'}}>
         <Image style={{width: 40, height: 40}} source={require('../img/1.png')}/>
         <Text style={styles.text}> تسجيل دخول</Text>
         
         </View>
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
    marginTop:60

    
  },
  
  button:{
    backgroundColor:'#636e72',
    // marginTop:330,
    width: 160,
    opacity:0.5,
    height: 120,
    borderRadius:8,
    borderColor:'white',
    borderWidth:1,
    margin:10,
    
    
  },
  but:{
    justifyContent:'flex-end',
    marginBottom:16,
    alignItems: 'center',
    
    
  },
  
  text: {
    color:'white',
    opacity:1,
    // position:"absolute",
    textAlign:'center',
    fontSize:24,
    fontFamily:'Cairo-Regular',
    marginBottom:18
  },
  welcome:{
    color:'#e7e3da',
    textAlign:'center',
    marginBottom:50,
    fontSize:30,
    fontFamily:'Cairo-Regular'
    
  }

});
