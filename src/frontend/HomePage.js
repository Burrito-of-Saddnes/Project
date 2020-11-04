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
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export default class HomePage extends Component {

  constructor( props ) {
    super( props )
    
    this.state = {
      hollidayName: '',
      addingName: null,
      addingMobilePhone: null,
      addingRoleSelection: 'Coose role',
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

  toggleAddingWithCancel() {
    this.setState(
      {
        addingDisplayed: !this.state.addingDisplayed
      }
    );
  };
  
  toggleAddingWithAccept() {
    this.setState(
      {
        addingDisplayed: !this.state.addingDisplayed
      }
    );
    if(this.state.addingName != null && this.state.addingMobilePhone != null && this.state.addingRoleSelection != null) {
      this.arr();
    }
    else {
      console.log('пошёл нахер')
    }
  };

  arr() {
    const inputResult = [
      {
        name: this.state.addingName,
        phone: this.state.addingMobilePhone,
        role: this.state.addingRoleSelection
      }
    ]
    console.log(inputResult)
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
        addingRoleSelection: newAdingRole
      }
    );
    this.toggleAddingRole()
  };

  onProfilePage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'Profile' )
  };

  onChatPage = () => {
    const { navigation } = this.props;
    navigation.navigate( 'Chat' )
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
              onPress = { this.onProfilePage }
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
            onPress = { this.onChatPage }
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
              onPress={() => this.toggleAddingWithCancel()}
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

                      <Text style = { Style.text }>{ this.state.addingRoleSelection }</Text>

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
                  onPress = { () => this.toggleAddingWithCancel() } 
                  style = { { paddingTop: 200, paddingBottom: 4 } }
                >

                  <Text style = { { color: '#999' } }>Cancel</Text>

                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor = 'null' 
                  onPress = { () => this.toggleAddingWithAccept() } 
                  style = { { paddingTop: 5, paddingBottom: 4 } }
                >

                  <Text style = { { color: '#999' } }>Accept</Text>

                </TouchableHighlight>

              </View>

            </Modal>

          </View>

        </View>

        <View>
            <Text>
              nezt
            </Text>
        </View>
      

      </ScrollView>
    );
  }
}