import React from 'react';
import { Component } from 'react';
import { Base64 } from 'js-base64';
import { 
  View, 
  TextInput, 
  TouchableHighlight, 
  Text,
  Modal, 
  ScrollView, 
  Button,
} from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class RegistrationPage extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      pickerSelection: 'Select role',
      sendCodeLogIn:'text',
      validationDisplayed: false,
      validationPassword: "",
      pickerDisplayed: false,
      email: '',
      password: '',
      repeatPassword : '',
      update_data: '',
      message: '',
      validationMessage: "Imput validation code",
      buttonSendLogIn: false,
      result: "",
      abc: "abcdefghijklmnopqrstuvwxyz1234567890",
    }
  }

  randomGenerator = () => {
    let rs = this.state.result;
    let abc = this.state.abc;
    while (rs.length < 6) {
      // this.setState({rs: abc[Math.floor(Math.random() * abc.length)]})
      rs += abc[Math.floor(Math.random() * abc.length)];
    }
    console.log(rs)
    this.setState({result:rs});
    this.toogleValidation();    
  };

  onValidationCheck = () => {
    if (this.state.validationPassword != this.state.result){
      this.setState({ validationMessage: "incorrect" })
    }
    else {
      this.setState({ validationMessage: "correct" })
      this.setState({buttonSendLogIn: true})
      this.toogleValidation();
      // this.UserRegistrationFunction();
    }
  };

  UserRegistrationFunction = ()  => {
    fetch('http://127.0.0.1/reg/index.php', {
      method: 'POST',
      body: JSON.stringify({
        role: this.state.pickerSelection,
        email: this.state.email,
        password: this.state.update_data 
      })
    }).then((response) => response.json())
          .then((responseJson) => {
            // Showing response message coming from server after inserting records.
            // If server response message same as User Registered Successfully
            if(responseJson === 'User Registered Successfully')
            {
              console.log(responseJson);
              this.onLogInPage();
            }
            else{
              console.log(responseJson);
            }
          }).catch((error) => {
            console.error(error);
          });
  }

  toogleValidationWithAccept() {
    this.onValidationCheck();
  };

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

  toogleValidation() {
    this.setState(
      {
        validationDisplayed: !this.state.validationDisplayed,
      }
    );
  };

  onTextCheck = (  email, password, repeatPassword, pickerSelection ) => {
    if( 
        email != '' &&
        password != '' &&
        repeatPassword == password &&
        pickerSelection != 'Select role'
      )
    {
      if( password.length < 6 ){
        this.setState({ message: "password length must\nbe more than 6 letters" })
      }else{
        console.log( 
          'email: ' + email + '\n' +
          'password: ' + password + '\n' +
          'repeatPassword: ' + repeatPassword + '\n' +
          'role: ' + pickerSelection + '.'
        );
        this.encrypt_password();
      }
    }
    else {
      this.setState({ message: "fullfill fields" })
      if( repeatPassword !=password ){
        this.setState({ message: "repeatPassword !=password" })
      }
      if( repeatPassword !=password && (email == '' || password == '' || ( pickerSelection !=  'a' || 'b' || 'c' ) ) ){
        this.setState({ message: "repeatPassword !=password and null" })
      }
    }
  };

  handleEmail = ( text ) => {
    text = text.replace(/[^0-9A-Za-z@!#%&*'-/=?^_`{|}`]/, '')
    this.setState({ email: text })
  };

  handlePassword = ( text ) => {
    text = text.replace(/[^0-9A-Za-z]/, '')
    text = text.substr(0, 20);
    this.setState({ password: text })
  };

  encrypt_password = () => {
    let temp = Base64.encode(this.state.password);
    this.setState({ update_data: temp });
    this.randomGenerator();
  }

  handleRepeatPassword = ( text ) => {
    this.setState({ repeatPassword: text })
  };

  handleValidationPassword = ( text ) => {
    text = text.replace(/[^0-9A-Za-z]/, '')
    text = text.substr(0, 20);
    this.setState({ validationPassword: text })
  };

  onLogInPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'LogIn' )
  };

  render() {

    const buttonSendLogIn = this.state.buttonSendLogIn;
    let button;
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

    if(!buttonSendLogIn) {
      button = 
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
        </TouchableHighlight>;
    } else {
      button = 
        <TouchableHighlight
          underlayColor = "null"
          style = { Style.button }
          onPress = { this.onLogInPage }
        >
          <Text style = { Style.text }>Go to LogIn</Text>
        </TouchableHighlight>;
    }

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
              onFocus={() => this.setState({ message: 'password can contain\nenglish letters and numbers\nbe at least 6 symbols long\nmax lenght is 20 symbols' })}
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

            {button}

            <Modal 
              visible = { this.state.validationDisplayed } 
              animationType = { "slide" } 
              transparent = { true } 
            >
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
              <View style = { Style.validationMenu }>
                <Text>{this.state.validationMessage}</Text>
                <TextInput
                  placeholder = { 'validation code' }
                  placeholderTextColor = "#ADA89F"
                  style = { [ Style.inputText, {} ] }
                  // onFocus={() => this.setState({ bgRepPassColor: 'red', brRepPassWidth: 2 })}
                  // onBlur={() => this.setState({ brRepPassWidth: 0 })}
                  autoCapitalize = "none"
                  value = { this.state.validationPassword }
                  onChangeText = { this.handleValidationPassword }
                />               
                <TouchableHighlight underlayColor = 'null' onPress = { () => this.toogleValidationWithAccept() } style = { { paddingTop: 4, paddingBottom: 4 } }>
                  <Text style = { { color: '#999' } }>Accept</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor = 'null' onPress = { () => this.toogleValidation() } style = { { paddingTop: 4, paddingBottom: 4 } }>
                  <Text style = { { color: '#999' } }>Cancel</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>
          </View>
        </View>
      </ScrollView>
    );
  }
}