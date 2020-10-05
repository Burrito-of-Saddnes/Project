import React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, TouchableHighlight, Image } from 'react-native';
import Style from './Style';

export default class LogInPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      mobilePhone: '',
      password: '',
    };
  };

  handleMobilePhone = (text) => {
    text = text.replace(/[^0-9]/, '')
    text = text.substr(0, 10);
    this.setState({ mobilePhone: text })
 };

 handlePassword = (text) => {
    this.setState({ password: text })
 };

  onRegistrationPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'Registration' )
  };

  onHomePage = ( mobilePhone, password ) => {
    if( mobilePhone != null  && password != null ) {
      console.log('Mobile Phone: ' + mobilePhone + '\n' + 'password: ' + password)
      const { navigation } = this.props;
      navigation.navigate( 'Home' )
    }
    else {
      console.log( 'пошёл нахер' )
    }
  };

  onForgottenPasswordPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'ForgottenPassword' )
  };

  render() {
    return (
      <View style = { Style.mainColor }>

        <Image
          style = {
            { 
              width: 150, 
              height: 150,
              position: 'absolute',
              bottom: 550,
            }
          }
          source = {require('./pic.png')}
          
        />

        {/* <Text style = { { color: 'cyan' } }>
          {this.state.mobilePhone}
        </Text> */}

        <View>

          <TextInput 
            placeholder = { 'Mobile Phone' }
            placeholderTextColor = "#D50000"
            style = { Style.inputText }
            autoCapitalize = "none"
            keyboardType = "phone-pad"
            value = { this.state.mobilePhone }
            onChangeText = { this.handleMobilePhone }
          />

          <TextInput 
            placeholder = { 'Password' }
            placeholderTextColor = "#D50000"
            style = { Style.inputText }
            autoCapitalize = "none"
            secureTextEntry = { true } 
            value = { this.state.password }
            onChangeText = { this.handlePassword }
          />

        </View>

        <View>

          <TouchableHighlight
            underlayColor = "null"
            onPress = { () => this.onHomePage( this.state.mobilePhone, this.state.password ) } 
          >
            <View style = { Style.button }>

              <Text style = { Style.text }>LogIn</Text>

            </View>

          </TouchableHighlight>

          <Text 
            onPress = { this.onForgottenPasswordPage }
            style = { Style.forgottenText }
          >
            Don't remember password?
          </Text>

          <TouchableHighlight 
            underlayColor = "null"
            onPress = { this.onRegistrationPage }
          >
            <View style = { Style.button }>

              <Text style = { Style.text }>Registration</Text>

            </View>
            
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}