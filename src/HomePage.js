import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import Calendario from './Calendar';

export default class HomePage extends Component {
  render() {
    return (
      <View style = {Style.container}>

        <View style = {Style.childrenContainer}>

          <TouchableHighlight
              underlayColor = "null"
              onPress = { () => console.log('Ты пидор') } 
          >

            <View style = { Style.littleButton }>

              <Text style = { Style.text }>0</Text>

            </View>
            
          </TouchableHighlight>

          <TouchableHighlight
              underlayColor = "null"
              onPress = { () => console.log('Нет ты пидор') } 
          >

            <View style = { Style.littleButton2 }>

              <Text style = { Style.text }>0</Text>

            </View>

          </TouchableHighlight>

        </View>

        <Calendario/>

      </View>
    );
  }
}