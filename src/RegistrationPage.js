import React from 'react';
import { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Modal } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';

export default class RegistrationPage extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      username: '',
      email: '', 
    }
  }

  onRegistrationPagePart2 = () => {
    const { navigation } = this.props;
    navigation.navigate( 'RegistrationPart2' )
  };

  onTextCheck = ( username, email) => {
    if( 
        username == 'name' &&
        email == 'name@name'
      ) 
    {
      console.log( 
        'username: ' + username + '\n' +
        'email: ' + email + '.'
      );
      this.onRegistrationPagePart2()
    }
    else {
      console.log( 'пошёл нахер' )
    }
  };

  handleUsername= ( text ) => {
    this.setState({ username: text })
  };

  handleEmail= ( text ) => {
    this.setState({ email: text })
  };
  
  render() {

    return (
      <View style = { Style.mainColor }>
        <TextInput
          placeholder = { 'Username' }
          placeholderTextColor = "#D50000"
          style = { Style.inputText }
          autoCapitalize="none"
          keyboardType = "default"
          value = { this.state.username }
          onChangeText = { this.handleUsername }
        />

        <TextInput
          placeholder = { 'Email' }
          placeholderTextColor = "#D50000"
          style = { Style.inputText }
          autoCapitalize="none"
          keyboardType = "email-address"
          value = { this.state.email }
          onChangeText = { this.handleEmail }
        />

        <TouchableHighlight
          underlayColor = "null"
          onPress = { () => this.onTextCheck( 
            this.state.username, 
            this.state.email) } 
        >

          <View style = { Style.verificationButton }>

            <Text style = { Style.text }>Continue</Text>

          </View>

        </TouchableHighlight>
      
      </View>
    );
  }
}