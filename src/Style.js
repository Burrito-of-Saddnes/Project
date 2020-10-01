import { StyleSheet } from 'react-native';

export default StyleSheet.create(
  {
    mainColor: {
      flex: 1,
      backgroundColor: '#1E1F25',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    button: { 
      width: 100,
      height: 41,
      backgroundColor: '#ecf0f1',
      margin: 10,
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center'
    },

    verificationButton: {
      width: 200,
      height: 41,
      backgroundColor: '#ecf0f1',
      margin: 10,
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center'
    },

    role: {
      paddingTop: 4, 
      paddingBottom: 4, 
      width: 100, 
      margin: 5,
      height: 30, 
      backgroundColor: '#ecf0f1',
      borderColor: '#48BBEC',
      borderWidth: 1,
      justifyContent: 'center',
      borderRadius: 30,
    },

    roleMenu: {
      borderRadius: 30,
      borderColor: '#48BBEC',
      borderWidth: 1,
      margin: 20, 
      padding: 20,
      backgroundColor: '#efefef',
      height: 200,
      width: 300,
      bottom: 20,
      left: 20,
      right: 20,
      alignItems: 'center',
      position: 'absolute'
    },

    text: {
      fontSize: 15,
      color: 'black',
      alignSelf: 'center'
    },

    forgottenText: {
      fontSize: 10,
      color: 'red',
    },

    inputText: {
      height: 40,
      width: 200,
      borderColor: '#48BBEC',
      borderWidth: 1,
      backgroundColor: '#ecf0f1',
      textAlign: 'center',
      margin: 10,
      borderRadius: 30,
    },

    input: {
      width: 50,
      height: 50,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#ecf0f1'
    },
    
    container: {
      backgroundColor: '#1E1F25',
      flex: 1,
      flexDirection: 'column',
    },

    childrenContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
    },

    littleButton:{
      width: 40,
      height: 40,
      backgroundColor: '#ecf0f1',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: 'center',
      margin: 5,
    },
    
    littleButton2:{
      width: 40,
      height: 40,
      backgroundColor: '#ecf0f1',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: 'center',
      margin: 5,
    },

  } 
);  