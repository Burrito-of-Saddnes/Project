import React from 'react';
import { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Modal, Image } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class RegistrationPage2 extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      pickerSelection: 'Select role',
      countrySelection: 'Select country',
      pickerDisplayed: false,
      countryDisplayed: false,
      mobilePhone: '',
      password: '',
      repeatPassword : '',  
    }
  }

  setPickerValue( newValue ) {
    this.setState(
      {
        pickerSelection: newValue
      }
    );
    this.togglePicker()
  };

  setCountryValue( newCountry ) {
    this.setState(
      {
        countrySelection: newCountry
      }
    );
    this.toggleCountry()
  };

  togglePicker() {
    this.setState(
      {
        pickerDisplayed: !this.state.pickerDisplayed
      }
    );
  };

  toggleCountry() {
    this.setState(
      {
        countryDisplayed: !this.state.countryDisplayed
      }
    );
  };

  onLogInPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'LogIn' )
  };

  onTextCheck = (  mobilePhone, password, repeatPassword, pickerSelection ) => {
    if( 
        mobilePhone == '55' &&
        password == 'name' &&
        repeatPassword == password &&
        pickerSelection == ( 'a' || 'b' || 'c' )
      ) 
    {
      console.log( 
        'mobilePhone: ' + mobilePhone + '\n' +
        'password: ' + password + '\n' +
        'repeatPassword: ' + repeatPassword + '\n' +
        'role: ' + pickerSelection + '.'
      );
      this.onLogInPage()
    }
    else {
      console.log( 'пошёл нахер' )
    }
  };

  handleMobilePhone= ( text ) => {
    this.setState({ mobilePhone: text })
  };

  handlePassword= ( text ) => {
    this.setState({ password: text })
  };

  handleRepeatPassword= ( text ) => {
    this.setState({ repeatPassword: text })
  };

  render() {

    const pickerValues = [
      {
        title: 'A',
        value: 'a'
      },
      {
        title: 'B',
        value: 'b'
      },
      {
        title: 'C',
        value: 'c'
      }
    ]

    const countryValues = [
      {
        title: 'Rus',
        value: 'rus'
      },
      {
        title: 'Eng',
        value: 'eng'
      },
      {
        title: 'Pol',
        value: 'pol'
      }
    ]

    return (
      <View style = { Style.mainColor }>
        <View style={{width:"60%", height: windowHeight*0.6, alignItems: 'center', justifyContent: 'space-around',}}>

          <TouchableHighlight style = { Style.verificationButton } underlayColor = "null" onPress={() => this.toggleCountry()}>
            <Text style = { Style.text }>{ this.state.countrySelection }</Text>
          </TouchableHighlight>
          
          <Modal 
            visible = { this.state.countryDisplayed } 
            animationType = { "slide" } 
            transparent = { true } 
          >
            <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
              <View style = { Style.roleMenu }>

                <Text>Please choose country</Text>

                { countryValues.map(( value, index ) => {
                  return <TouchableHighlight 
                            key = { index }
                            underlayColor = 'null'
                            onPress = { () => this.setCountryValue( value.value ) } 
                            style = { Style.role}
                          >
                            <Text style = {Style.text}>{ value.title }</Text>
                          </TouchableHighlight>
                })}

                <TouchableHighlight
                  underlayColor = 'null' 
                  onPress = { () => this.toggleCountry() } 
                  style = { { paddingTop: 4, paddingBottom: 4 } }
                >
                  <Text style = { { color: '#999' } }>Cancel</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>

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
            secureTextEntry = { true }
            autoCapitalize = "none"
            value = { this.state.password }
            onChangeText = { this.handlePassword }
          />

          <TextInput
            placeholder = { 'Repeat password' }
            placeholderTextColor = "#ADA89F"
            style = { Style.inputText }
            secureTextEntry = { true }
            autoCapitalize = "none"
            value = { this.state.repeatPassword }
            onChangeText = { this.handleRepeatPassword }
            />

          <TouchableHighlight style = { Style.verificationButton } underlayColor = "null" onPress={() => this.togglePicker()}>
              <Text style = { Style.text }>{ this.state.pickerSelection }</Text>
          </TouchableHighlight>

          <Modal 
            visible = { this.state.pickerDisplayed } 
            animationType = { "slide" } 
            transparent = { true } 
          >
            <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
              <View style = { Style.roleMenu }>
                <Text>Please pick a role</Text>
                { pickerValues.map(( value, index ) => {
                  return <TouchableHighlight 
                            key = { index }
                            underlayColor = 'null'
                            onPress = { () => this.setPickerValue( value.value ) } 
                            style = { Style.role}
                          >
                            <Text style = {Style.text}>{ value.title }</Text>
                          </TouchableHighlight>
                })}
                
                <TouchableHighlight underlayColor = 'null' onPress = { () => this.togglePicker() } style = { { paddingTop: 4, paddingBottom: 4 } }>
                  <Text style = { { color: '#999' } }>Cancel</Text>
                </TouchableHighlight>

              </View>
            </View>
            

          </Modal>

          <TouchableHighlight
            underlayColor = "null"
            onPress = { () => this.onTextCheck( 
                this.state.mobilePhone, 
                this.state.password, 
                this.state.repeatPassword,
                this.state.pickerSelection
              ) 
            } 
          >

            <View style = { Style.verificationButton }>

              <Text style = { Style.text }>Send verification code</Text>

            </View>

          </TouchableHighlight>
        </View>
      </View>
    );
  }
}