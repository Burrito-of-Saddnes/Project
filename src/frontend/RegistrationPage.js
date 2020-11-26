import React from 'react';
import { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Modal } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class RegistrationPage extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      username: null,
      email: null, 
    }
  }

  onRegistrationPagePart2 = () => {
    const { navigation } = this.props;
    navigation.navigate( 'RegistrationPart2' )
  };

  onTextCheck = ( username, email) => {
    if( 
        username != null  &&
        email != null
      ) 
    {
      console.log( 
        'username: ' + username + '\n' +
        'email: ' + email + '.'
      );
      this.onRegistrationPagePart2()
    }
    else {
      console.log( 'отставить' )
    }
  };

  handleUsername = ( text ) => {
    this.setState({ username: text })
  };

  handleEmail = ( text ) => {
    this.setState({ email: text })
  };
  
  render() {

    return (
      <View style = { Style.mainColor }>
        <View style={{width:"60%", height: windowHeight*0.5, alignItems: 'center', justifyContent: 'space-around',}}>
          <TextInput
            placeholder = { 'Username' }
            placeholderTextColor = "#ADA89F"
            style = { Style.inputText }
            autoCapitalize = "none"
            keyboardType = "default"
            value = { this.state.username }
            onChangeText = { this.handleUsername }
          />

          <TextInput
            placeholder = { 'Email' }
            placeholderTextColor = "#ADA89F"
            style = { Style.inputText }
            autoCapitalize = "none"
            keyboardType = "email-address"
            value = { this.state.email }
            onChangeText = { this.handleEmail }
          />

          <TouchableHighlight
            style = { Style.verificationButton }
            underlayColor = "null"
            onPress = { () => this.onTextCheck( 
              this.state.username, 
              this.state.email) } 
          >
            <Text style = { Style.text }>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}