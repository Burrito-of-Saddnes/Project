import React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, TouchableHighlight, ScrollView } from 'react-native';
import Style from './Style';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LogInPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      mobilePhone: null,
      password: null,
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

        {/* <Image
          style = {
            { 
              width: 150, 
              height: 150,
              position: 'absolute',
              bottom: 550,
            }
          }
          source = {require('./pic.png')}
          
        /> */}

        {/* <Text style = { { color: 'cyan' } }>
          {this.state.mobilePhone}
        </Text> */}

        <View style={{width:"60%", height: windowHeight*0.6, alignItems: 'center', justifyContent: 'space-around',}}>
          <TextInput  
              placeholder = { 'Mobile Phone' }
              placeholderTextColor = "#ADA89F"
              style = { Style.inputText }
              autoCapitalize = "none"
              keyboardType = "phone-pad"
              value = { this.state.mobilePhone }
              onChangeText = { this.handleMobilePhone }
            />

          <TextInput 
            placeholder = { 'Password' }
            placeholderTextColor = "#ADA89F"
            style = { Style.inputText }
            autoCapitalize = "none"
            secureTextEntry = { true } 
            value = { this.state.password }
            onChangeText = { this.handlePassword }
          />

          <TouchableHighlight style = { Style.button } underlayColor = "null" onPress = { () => this.onHomePage( this.state.mobilePhone, this.state.password ) } >
              <Text style = { Style.text }>LogIn</Text>
          </TouchableHighlight>

          <Text onPress = { this.onForgottenPasswordPage } style = { Style.forgottenText }>
            Don't remember password?
          </Text>

          <TouchableHighlight style = { Style.button } underlayColor = "null" onPress = { this.onRegistrationPage }>
              <Text style = { Style.text }>Registration</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }



  


}