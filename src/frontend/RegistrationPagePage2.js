import React from 'react';
import { Component } from 'react';
import { 
  View, 
  TextInput, 
  TouchableHighlight, 
  Text,
  Modal, 
  ScrollView } from 'react-native';
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
      pickerDisplayed: false,
      email: null,
      password: null,
      repeatPassword : null,
      message: '',
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

  togglePicker() {
    this.setState(
      {
        pickerDisplayed: !this.state.pickerDisplayed
      }
    );
  };

  onVerificationPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'Verification' )
  };

  onTextCheck = (  email, password, repeatPassword, pickerSelection ) => {
    if( 
        email != null &&
        password != null &&
        repeatPassword == password &&
        pickerSelection == ( 'a' || 'b' || 'c' )
      ) 
    {
      console.log( 
        'email: ' + email + '\n' +
        'password: ' + password + '\n' +
        'repeatPassword: ' + repeatPassword + '\n' +
        'role: ' + pickerSelection + '.'
      );
      this.onVerificationPage()
    }
    else {
      this.setState({ message: "fullfill fields" })
      if( repeatPassword !=password ){
        this.setState({ message: "repeatPassword !=password" })
      }
      if( repeatPassword !=password && (email == null || password == null || pickerSelection != ( 'a' || 'b' || 'c' )) ){
        this.setState({ message: "repeatPassword !=password and null" })
      }
    }
  };

  handleEmail= ( text ) => {
    this.setState({ email: text })
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

    return (
      <ScrollView style={Style.container}>

        <View style = { Style.mainColor }>

          <Text style = {{ color: 'white', alignSelf: 'center', textAlign:'center' }}>{this.state.message}</Text>

          <View style={{width:"60%", height: windowHeight*0.6, alignItems: 'center', justifyContent: 'space-around',}}>

            <TextInput
              style = { [ Style.inputText, {} ] }
              // onFocus={() => this.setState({ bgEmailColor: 'red', brEmailWidth: 2 })}
              // onBlur={() => this.setState({ brEmailWidth: 0 })}
              placeholder = { 'Email' }
              placeholderTextColor = "#ADA89F"
              autoCapitalize = "none"
              value = { this.state.email }
              onChangeText = { this.handleEmail }
            />

            <TextInput
              placeholder = { 'Password' }
              placeholderTextColor = "#ADA89F"
              style = { [ Style.inputText, {} ] }
              onFocus={() => this.setState({ message: 'password must contain english letters \n and be at least 6 symbols long \n max lenght is 20 symbols' })}
              onBlur={() => this.setState({ message: '' })}
              secureTextEntry = { true }
              autoCapitalize = "none"
              value = { this.state.password }
              onChangeText = { this.handlePassword }
            />

            <TextInput
              placeholder = { 'Repeat password' }
              placeholderTextColor = "#ADA89F"
              style = { [ Style.inputText, {} ] }
              // onFocus={() => this.setState({ bgRepPassColor: 'red', brRepPassWidth: 2 })}
              // onBlur={() => this.setState({ brRepPassWidth: 0 })}
              secureTextEntry = { true }
              autoCapitalize = "none"
              value = { this.state.repeatPassword }
              onChangeText = { this.handleRepeatPassword }
            />

            <TouchableHighlight style = { Style.button } underlayColor = "null" onPress={() => this.togglePicker()}>
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
              style = { Style.button }
              onPress = { () => this.onTextCheck( 
                  this.state.email, 
                  this.state.password, 
                  this.state.repeatPassword,
                  this.state.pickerSelection
                ) 
              } 
            >
              <Text style = { Style.text }>Send code</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}