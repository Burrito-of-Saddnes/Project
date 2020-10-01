import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';

export default class ForgottenPasswordPage extends Component {
  render() {
    return (
      <View style = { Style.mainColor }>

        <Text>Forgotten Password</Text>
          
      </View>
    );
  }
}