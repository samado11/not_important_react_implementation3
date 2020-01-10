import React, { Component } from 'react';
import { Alert, TouchableOpacity , TextInput, View,ImageBackground, StyleSheet,Text } from 'react-native';

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
        <Text style={styles.welcome}> تسجيل دخول </Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'اسم المستخدم'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'كلمه السر'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
        title={'Login'}
         style={styles.button}
         onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.text}> تسجيل الدخول </Text>
       </TouchableOpacity>

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021c1e',
    
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius:18,
    backgroundColor:'#e9edea',
      textAlign:'right',
      fontFamily:'Cairo-Regular'
  },
  button:{
    backgroundColor:'#f79005',
    marginBottom:10,
    width: 350,
    height: 44,
    borderRadius:18,
    
  },
  text: {
    color:'#e7e3da',
    textAlign:'center',
    paddingTop:5,
    fontSize:20,
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
