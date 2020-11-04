import React, { Component, useState, useEffect } from 'react';
import { Button, ImageBackground, Image, View, Platform, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

class ImageChanger extends Component {
  constructor(props){
    super(props);
    this.state={
      image: null,
    }
  }
  useEffect = (() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  };

  render(){
    return (
      <View style={{ flex: 2.5, alignItems: 'center', justifyContent: 'center' }}>
        <Image resizeMode = 'contain' source={{ uri: this.state.image }} style={{ width: "80%", height: "80%", borderWidth: 2, borderColor:"#000080" }}/>
        <View style={{display: this.props.visible}}>
          <Button title="Pick an image from camera roll" onPress={this.pickImage} />
        </View>
      </View>
    );
  }
}

export default class ProfilePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          phone: '',
          name: '',
          surname: '',
          middleName: '',
          editable: false,
          visible: "none"
        };
    }
    
    handlePhone = (text) =>{
      text = text.replace(/[^0-9]/,'');
      this.setState({phone: text})
    }
    handleName = (text) =>{
      text = text.replace(/[^а-яa-zА-ЯA-Z]/,'');
      this.setState({name: text})
    }
    handleSurname = (text) =>{
      text = text.replace(/[^а-яa-zА-ЯA-Z]/,'');
      this.setState({surname: text})
    }
    handleMiddleName = (text) =>{
      text = text.replace(/[^а-яa-zА-ЯA-Z]/,'');
      this.setState({middleName: text})
    }
    
    render() {
        return (
          <View style={{flex: 1, marginTop: Constants.statusBarHeight, backgroundColor: "cyan"}}>
            <View style={{flex:0.3, justifyContent: "center", alignItems: "flex-end"}}>
              <TouchableOpacity onPress={()=>{this.setState({editable: true, visible: "flex"});}} style={{justifyContent: "center", flex:1, }}>
                <Text style={{color: "white", textShadowColor: "#0000FF", textShadowOffset:{width:0,height:0}, textShadowRadius: 30, fontWeight: "bold"}}>Редактировать</Text>
              </TouchableOpacity>
            </View>
            <ImageChanger visible = {this.state.visible}/>      
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <TextInput
                editable={this.state.editable}
                style={{flex:1, backgroundColor: "white",  borderRadius: 30, borderWidth: 2, borderColor: "grey", width: "50%", textAlign: "center"}}
                placeholder = {'Фамилия'} 
                value={this.state.surname} 
                onChangeText={this.handleSurname}
              />
              <TextInput
                editable={this.state.editable}
                style={{flex:1, backgroundColor: "white", borderRadius: 30, borderWidth: 2, borderColor: "grey", width: "50%", textAlign: "center"}}
                placeholder = {'Имя'} 
                value={this.state.name} 
                onChangeText={this.handleName}
              />
              <TextInput
                editable={this.state.editable}
                style={{flex:1, backgroundColor: "white",  borderRadius: 30, borderWidth: 2, borderColor: "grey", width: "50%", textAlign: "center"}}
                placeholder = {'Отчество'} 
                value={this.state.middleName} 
                onChangeText={this.handleMiddleName}
              />
              <TextInput 
                editable={this.state.editable}
                style={{flex:1, backgroundColor: "white",  borderRadius: 30, borderWidth: 2, borderColor: "grey", width: "50%", textAlign: "center"}}
                keyboardType = "phone-pad" 
                placeholder = {'Телефон'}
                maxLength = {11}
                value={this.state.phone} 
                onChangeText={this.handlePhone}
              />
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <TouchableOpacity onPress={()=>{this.setState({editable: false, visible: "none"})}} style={{backgroundColor: "red", borderRadius: 10, padding: 10, display: this.state.visible}}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Сохранить</Text>
              </TouchableOpacity>
            </View>



           </View>
        );
    }
}