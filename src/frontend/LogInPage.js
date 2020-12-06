import React from 'react';
import { Component } from 'react';
import { 
  Text, 
  TextInput, 
  View, 
  TouchableHighlight, 
  ScrollView } from 'react-native';
import Style from './Style';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class LogInPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      email: null,
      password: null,
    };
  };

  handleEmail = (text) => {
    // text = text.replace(/[^0-9]/, '')
    // text = text.substr(0, 10);
    this.setState({ email: text })
 };

 handlePassword = (text) => {
    this.setState({ password: text })
 };

  onRegistrationPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'Registration' )
  };

  onHomePage = ( email, password ) => {
    if( email != null  && password != null ) {
      console.log('Email: ' + email + '\n' + 'password: ' + password)
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
      <ScrollView style={Style.container}>
        <View style = { Style.mainColor }>
          <View style={{width:"60%", height: windowHeight*0.6, alignItems: 'center', justifyContent: 'space-around',}}>
            <TextInput  
              placeholder = { 'Email' }
              placeholderTextColor = "#ADA89F"
              style = { Style.inputText }
              autoCapitalize = "none"
              keyboardType = "email-address"
              value = { this.state.email }
              onChangeText = { this.handleEmail }
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

            <TouchableHighlight style = { Style.button } underlayColor = "null" onPress = { () => this.onHomePage( this.state.email, this.state.password ) } >
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
      </ScrollView>
    );
  }



  


}