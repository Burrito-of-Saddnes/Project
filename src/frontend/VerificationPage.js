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

export default class VerificationPage extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      verificationCode: null,
    };
  };

  handleVerificationCode = (text) => {
    text = text.replace(/[^0-9A-Za-z]/, '')
    text = text.substr(0, 6);
    this.setState({ verificationCode: text })
 };

 onLogInPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'LogIn' )
  };

  onTextCheck = (  verificationCode ) => {
    if( 
        verificationCode != null 
      ) 
    {
      console.log( 
        'verificationCode: ' + verificationCode
      );
      this.onLogInPage()
    }
    else {
      console.log("Пошёл нахер")
    }
  };

  render() {
    return (
      <ScrollView style={Style.container}>
        <View style = { Style.mainColor }>
          <View style={{width:"60%", height: windowHeight*0.6, alignItems: 'center', justifyContent: 'space-around',}}>
            <TextInput  
              placeholder = { 'Verification Code' }
              placeholderTextColor = "#ADA89F"
              style = { Style.inputText }
              autoCapitalize = "none"
              keyboardType = "phone-pad"
              value = { this.state.verificationCode }
              onChangeText = { this.handleVerificationCode }
            />
            <TouchableHighlight style = { Style.button } underlayColor = "null" onPress = { () => this.onTextCheck( this.state.verificationCode) } >
                <Text style = { Style.text }>Go to LogIn</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }



  


}