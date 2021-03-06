import React from 'react';
import { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInPage from './LogInPage';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import RegistrationPagePart2 from './RegistrationPagePage2';
import ForgottenPasswordPage from './ForgottenPasswordPage';
import ProfilePage from './ProfilePage';
import ChatPage from './ChatPage';
import NotesPage from './NotesPage';
import VerificationPage from './VerificationPage'


const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./react.png')}
    />
  );
};

export default class Index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name = "LogIn" 
              component = { LogInPage } 
              options = {
                {
                  headerStyle: 
                    {
                      backgroundColor: '#1E1F25',
                      borderBottomWidth: 0,
                    }, 
                  headerTintColor: '#fff'
                }
              }
            />
          <Stack.Screen 
            name = "Registration" 
            component = { RegistrationPage } 
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff'
              }
            }
          />
          {/* <Stack.Screen 
            name = "RegistrationPart2" 
            component = { RegistrationPagePart2 } 
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff'
              }
            }
          />
          <Stack.Screen 
              name = "Verification" 
              component = { VerificationPage } 
              options = {
                {
                  headerStyle: 
                    {
                      backgroundColor: '#1E1F25',
                      borderBottomWidth: 0,
                    }, 
                  headerTintColor: '#fff'
                }
              }
            /> */}
          <Stack.Screen
            name = "Home"
            component = { HomePage }
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff',
                headerLeft: props => <LogoTitle {...props} />
              }
            }
          />
          <Stack.Screen
            name = "ForgottenPassword"
            component = { ForgottenPasswordPage }
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff'
              }
            }
          />
          <Stack.Screen
            name = "Profile"
            component = { ProfilePage }
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff',
              }
            }
          />
          <Stack.Screen 
            name = "Chat" 
            component = { ChatPage } 
            options = {
              {
                headerStyle: 
                  {
                    backgroundColor: '#1E1F25',
                    borderBottomWidth: 0,
                  }, 
                headerTintColor: '#fff'
              }
            }
          />
          <Stack.Screen
            name = "Notes"
            component = { NotesPage }
            options = {
              {
                headerStyle:
                {
                  backgroundColor: '#1E1F25',
                  borderBottomWidth: 0,                
                },
                headerTintColor: '#fff'
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
