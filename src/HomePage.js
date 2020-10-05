import React from 'react';
import { Component } from 'react';
import { 
        View, 
        Text, 
        TouchableHighlight, 
        TextInput, 
        ScrollView,
        Modal,

      } from 'react-native';
import Style from './Style';
import 'react-native-gesture-handler';
import Calendario from './Calendar';

export default class HomePage extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      hollidayName: '',
      addingName: '',
      addingMobilePhone: '',
      addigRoleSelection: 'Coose role',
      addingDisplayed: false,
      addingRoleDisplayed: false,
    }
  }

  handleHollidayName = ( text ) => {
    this.setState({ hollidayName: text })
  };

  handleAddingName = ( text ) => {
    this.setState({ addingName: text })
  }

  handleAddingMobilePhone = ( text ) => {
    this.setState({ addingMobilePhone: text })
  }

  toggleAdding() {
    this.setState(
      {
        addingDisplayed: !this.state.addingDisplayed
      }
    );
  };

  toggleAddingRole() {
    this.setState(
      {
        addingRoleDisplayed: !this.state.addingRoleDisplayed
      }
    );
  };

  setAddingRoleValue( newAdingRole ) {
    this.setState(
      {
        addigRoleSelection: newAdingRole
      }
    );
    this.toggleAddingRole()
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
      },
      {
        title: 'D',
        value: 'd'
      },
      {
        title: 'E',
        value: 'e'
      },
    ]

    return (
      <ScrollView style = {Style.container}>

        <View style = {Style.childrenContainer}>

          <TouchableHighlight
              underlayColor = "null"
              onPress = { () => console.log('Ты какашка') } 
          >

            <View style = { Style.littleButton }>

              <Text style = { Style.text }>0</Text>

            </View>

          </TouchableHighlight>

          <TouchableHighlight
              underlayColor = "null"
              onPress = { () => console.log('Нет ты какашка') } 
          >

            <View style = { Style.littleButton2 }>

              <Text style = { Style.text }>0</Text>

            </View>
          </TouchableHighlight>

        </View>

        <View>

          <Calendario/>

        </View>

        <View style = {Style.nameContainer}>

          <TextInput
            placeholder = { 'Название' }
            placeholderTextColor = "#D50000"
            style = { Style.inputName }
            autoCapitalize="none"
            value = { this.state.hollidayName }
            onChangeText = { this.handleHollidayName }
          />

          <TouchableHighlight
            underlayColor = "null"
            onPress = { () => console.log('Ты какашка') } 
          >

            <View style = { Style.profileButton }>

              <Text style = { Style.text }>0</Text>
              
            </View>

          </TouchableHighlight>
          
          <TouchableHighlight
            underlayColor = "null"
            onPress = { () => console.log('Нет ты какашка') } 
          >

            <View style = { Style.settingsButton }>

              <Text style = { Style.text }>0</Text>

            </View>

          </TouchableHighlight>

        </View>
       
        <View style = { Style.addContainer }>
          
          <View style = {{ margin: 20 }}>

            <TouchableHighlight
              underlayColor = "null"
              onPress={() => this.toggleAdding()}
            >

              <View style = { Style.addingMenuButton }>

                <Text style = { Style.text }>0</Text>

              </View>

            </TouchableHighlight>

            <Modal 
              visible = { this.state.addingDisplayed } 
              animationType = { "slide" } 
              transparent = { true } 
            >
              
              <View style = { Style.addingMenu }>

                <Text>Complete input</Text>

                <TextInput
                  placeholder = { 'Name' }
                  placeholderTextColor = "#D50000"
                  style = { Style.inputMenuText }
                  autoCapitalize="none"
                  value = { this.state.addingName }
                  onChangeText = { this.handleAddingName }
                />

                <TextInput
                  placeholder = { 'Mobil Phone' }
                  placeholderTextColor = "#D50000"
                  style = { Style.inputMenuText }
                  autoCapitalize="none"
                  value = { this.state.addingMobilePhone }
                  onChangeText = { this.handleAddingMobilePhone }
                />

                <View style = {{ margin: 5 }}>

                  <TouchableHighlight
                    underlayColor = 'null'
                    onPress={() => this.toggleAddingRole()} 
                  >
                     <View style = { Style.roleCoosingButton }>

                      <Text style = { Style.text }>{ this.state.addigRoleSelection }</Text>

                    </View>

                  </TouchableHighlight>

                  <Modal 
                    visible = { this.state.addingRoleDisplayed } 
                    animationType = { "slide" } 
                    transparent = { true } 
                  >

                    <View style = { Style.addingRoleMenu }>
                
                        { pickerValues.map(( value, index ) => {
                        return <TouchableHighlight 
                                  key = { index }
                                  underlayColor = 'null'
                                  onPress = { () => this.setAddingRoleValue( value.value ) } 
                                  style = { Style.role}
                                >
                                
                                  <Text style = {Style.text}>{ value.title }</Text>
                                </TouchableHighlight>
                          }
                        )
                      }
                      <TouchableHighlight
                        underlayColor = 'null' 
                        onPress = { () => this.toggleAddingRole() } 
                        style = { { paddingTop: 1, paddingBottom: 4 } }
                      >
                
                        <Text style = { { color: '#999' } }>Cancel</Text>

                      </TouchableHighlight>

                    </View>

                  </Modal>

                </View>

                <TouchableHighlight
                  underlayColor = 'null' 
                  onPress = { () => this.toggleAdding() } 
                  style = { { paddingTop: 200, paddingBottom: 4 } }
                >

                  <Text style = { { color: '#999' } }>Cancel</Text>

                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor = 'null' 
                  onPress = { () => this.toggleAdding() } 
                  style = { { paddingTop: 5, paddingBottom: 4 } }
                >

                  <Text style = { { color: '#999' } }>Accept</Text>

                </TouchableHighlight>

              </View>

            </Modal>

          </View>

        </View>

      </ScrollView>
    );
  }
}