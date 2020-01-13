import React, { Component } from 'react'
import {  StyleSheet, Text, View, ImageBackground ,Image,Dimensions,TouchableOpacity,Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Swiper from 'react-native-swiper'
const {width,height}=Dimensions.get('window')
const styles = StyleSheet.create({

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    position:'absolute',
    top:0.5*height,
    // right:0.4*width,
    alignSelf:'center'
  }
})

class SwiperComponent extends Component {
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
<Swiper showsButtons={true}>
<View style={{position:'relative'}}>
<Image style={{width: "100%", height: "100%"}} source={{uri: 'https://media.linkonlineworld.com/img/large/2020/1/5/2020_1_5_1_40_14_788.jpg'}}></Image>
    <Text style={styles.text}>Hello</Text>

  </View>
  <View style={{position:'relative'}}>
  <Image style={{width: "100%", height: "100%"}} source={{uri: 'https://3.bp.blogspot.com/-1p6adJoed5s/XcALvTplwkI/AAAAAAAAozA/07wpHtNBmZIogVpWQAs5IQqvKOzIHmjeQCNcBGAsYHQ/s1600/elissa-breast-red-dress-04.jpg'}}></Image>

<Text style={styles.text}>Do you love me?</Text>

</View>

<View style={{position:'relative'}}>
<Image style={{width: "100%", height: "100%"}} source={{uri: 'https://img.btolat.com/news/large/150747.jpg'}}></Image>
<TouchableOpacity  onPress={()=>this.goToScreen('Login')}  style={{position:'absolute',top:0.6*height,alignSelf:'center',backgroundColor: "#00b3e6", borderRadius: 10, padding: 2}}>
         <View >
         <Text style={{color:"white",alignSelf:"center",fontSize: 18}}> Next</Text>
         </View>
       </TouchableOpacity>
             

<Text style={styles.text}>Do you need me?</Text>

</View>

      </Swiper>
   
      </View>
       )
  }
}

export default  SwiperComponent
