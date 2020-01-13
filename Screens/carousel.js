import React, { Component } from 'react'
import {  StyleSheet, Text, View, ImageBackground ,Image,Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';

class MyCarousel extends Component {
    state= {
        entries:[
            {
            title:'Dorra',
            uri:'https://media.linkonlineworld.com/img/large/2020/1/5/2020_1_5_1_40_14_788.jpg'
            },
            {
            title:"Elissa",
            uri:'https://3.bp.blogspot.com/-1p6adJoed5s/XcALvTplwkI/AAAAAAAAozA/07wpHtNBmZIogVpWQAs5IQqvKOzIHmjeQCNcBGAsYHQ/s1600/elissa-breast-red-dress-04.jpg'
            },
            {
                title:"Abu-treka",
                uri:'https://img.btolat.com/news/large/150747.jpg'
            }
        ]
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Image style={{width: "100%", height: "92%"}} source={{uri: item.uri}}></Image>
                <Text style={{color: '#ffffff',fontSize: 30,fontWeight: 'bold'}}>{ item.title }</Text>

            </View>
        );
    }

    render () {
        return (
            <View style={{backgroundColor:'#ffdd59',height:"100%"}}>
            <Carousel
              loop
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={180}
            />
            </View>
        );
    }
}

export default  MyCarousel