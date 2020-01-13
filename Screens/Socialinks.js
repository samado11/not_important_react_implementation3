/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon0 from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Tabs from 'react-native-tabs';
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
  state = [1, 1, 1, 1, 1]
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
  render() {
    return (<ScrollView>
      <View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: "2%", top: "2%" }}>
          <Icon1 name="dots-horizontal" size={20} color="#2980b9" />
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 16, color: "#107dac" }}>الحملات الاعلانيه</Text>
            <Icon0 name="right" size={18} color="#2980b9" />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 26, top: "40%", right: "3%" }}>
            اعلان وجبه جديده شاورمر
        </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: "4%", top: "8%" }}>
          <Text style={{ fontSize: 18 }}> التعاقدات(3)</Text>
          <Text style={{ fontSize: 18 }}> الطلبات(9)</Text>
          <Text style={{ fontSize: 18, marginBottom: "12%" }}> تفاصيل</Text>
          
        </View>
        {this.state.map(elem => {
          return (
            // view card  
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>

              <View style={{ margin: "2%", backgroundColor: "white", borderRadius: 5, marginTop: "1%", padding: 4 }}>
                <View style={{ justifyContent: 'flex-end', width: "100%", top: "3%", paddingHorizontal: "4%", flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ flexDirection: 'column', paddingHorizontal: "5%" }}>

                      <Icon style={{ borderWidth: 1, borderRadius: 50, padding: 8, borderColor: "#dfd9d9" }} name="twitter" size={20} color="#3498db" />
                      <Text style={{ top: -8, backgroundColor: "white", left: 7 }}>568</Text>
                      <Text style={{ textAlign: "center", color: "#00b3e6", top: -8 }}>k</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingHorizontal: "5%" }}>

                      <Icon style={{ borderWidth: 1, borderRadius: 50, padding: 8, borderColor: "#dfd9d9" }} name="instagram" size={20} color="#ff4757" />
                      <Text style={{ top: -8, backgroundColor: "white", left: 7 }}>568</Text>
                      <Text style={{ textAlign: "center", color: "#00b3e6", top: -8 }}>k</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingHorizontal: "2%" }}>

                      <Icon3 style={{ borderWidth: 1, borderRadius: 50, padding: 8, borderColor: "#dfd9d9" }} name="snapchat" size={20} color="yellow" />
                      <Text style={{ top: -8, backgroundColor: "white", left: 7 }}>568</Text>
                      <Text style={{ textAlign: "center", color: "#00b3e6", top: -8 }}>k</Text>
                    </View>



                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'column', paddingHorizontal: "2%" }}>
                      <Text style={{ fontSize: 18 }}>افنان الباتل</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text >الرياض</Text>
                        <Icon2 name="location-pin" size={20} color="grey" />
                      </View>
                    </View>
                    <Image style={{ width: "25%", height: "60%", borderRadius: 40 }} source={require('../src/imgs/1.jpg')} />

                  </View>

                </View>
                <View style={{ flexDirection: 'row-reverse', top: "4%" }}>
                  <Icon0 name="checkcircleo" size={20} color="green" />
                  <Text style={{ fontSize: 16, left: "19%" }}>
                    ارسلت الشروط و حددت السعر
        </Text>
                </View>
                <View style={{ top: "16%", paddingHorizontal: "2%", height: "8%" }}>
                  <TouchableOpacity onPress={() => this.goToScreen('Carousel')} style={{ backgroundColor: "#00b3e6", borderRadius: 10, padding: 4 }}>
                    <View >
                      <Text style={{ color: "white", justifyContent: "center", fontSize: 18 }}> اتخذ اجراء</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>)
  }
}
//onPress={()=>this.goToScreen('Carousel')}


export default Social;
