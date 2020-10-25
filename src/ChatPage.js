import React, { Component } from 'react';
import { Image, View, Platform, TextInput, Modal, Text, TouchableOpacity, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let imageUri, heightImage, widthImage, coef;

class ImageLibrary extends Component {
  constructor(props){
    super(props);
  }
  pickImageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
    });

    if (!result.cancelled) {
      Image.getSize(result.uri, (Width, Height) => {
        widthImage= Width;
        heightImage=Height;
      });
      imageUri = result.uri;
    }
  };
  render(){
    return (
      <View style={{height: "33.33%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity style={{height: "60%", width: "80%", backgroundColor: "cyan", borderRadius: 10, justifyContent: "center"}} onPress={this.pickImageFromLibrary}>
          <Text style={{fontSize: 18, color: "white", textAlign: "center", fontWeight: "bold", textShadowColor:"green", textShadowOffset:{height:0,width:0}, textShadowRadius:10}}>Выбрать из галереи</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ImageCamera extends Component {
  constructor(props){
    super(props);
  }
  pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.cancelled) {
      Image.getSize(result.uri, (Width, Height) => {
        widthImage= Width;
        heightImage=Height;
      });
      imageUri = result.uri;
    }
  };

  render(){
    return (
      <View style={{height: "33.33%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity style={{height: "60%", width: "80%", backgroundColor: "cyan", borderRadius: 10, justifyContent: "center"}} onPress={this.pickImageFromCamera}>
          <Text style={{fontSize: 18, color: "white", textAlign: "center", fontWeight: "bold", textShadowColor:"green", textShadowOffset:{height:0,width:0}, textShadowRadius:10}}>Cделать снимок</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const renderItem = ({item}) =>{
  return(
    <View style={{paddingVertical: 3, alignItems: "flex-end"}}>
      {item.title}
    </View>
  );
}

export default class ChatPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
      DATA: [],
      i: 0,
      visibleModalSettings: false,
      visibleModalImagePicker: false
    }
  }

  sendMessage = () => {
    if(imageUri===undefined){
      if(this.state.inputText!==""){
        this.state.DATA.push({
          id: this.state.i++, 
          title: <Text multiline={true} style={{maxWidth:"70%", backgroundColor:"cyan", borderRadius: 8, padding: 5}}>{this.state.inputText}</Text>,
        });
        this.setState({inputText: ''});
      }
    }else{
      if(widthImage>windowWidth*0.7){
        coef=widthImage/(windowWidth*0.7);
        widthImage = Math.round(windowWidth*0.7);
        heightImage = Math.round(heightImage/coef);
      }
      this.state.DATA.push({id: this.state.i++, title: <Image resizeMode="contain" style={{height: heightImage, width: widthImage}} source={{uri: imageUri}}/>});
      imageUri=undefined;
    }
  };
  render(){
    return(
        <View style={{flex:1, marginTop: Constants.statusBarHeight}}>

          <View style={{flexDirection: "row", height: windowHeight*0.08, backgroundColor: "#808080"}}>

            <View style={{flex: 7, flexDirection:"row", alignContent: "center"}}>
              <Text style={{textAlign: "center", fontSize: 20}}>{this.state.nameConvarsation}</Text>
            </View>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <TouchableOpacity onPress={()=>{this.setState({visibleModalSettings: true})}}>
                <Text style={{color:"#0000FF", fontSize: 25, fontWeight:"bold"}}>{String.fromCodePoint(35)}</Text>
              </TouchableOpacity> 
            </View>

          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.visibleModalSettings}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <View style={{alignItems: "center", backgroundColor: "#FFE4E1", height:"80%", width:"80%"}}>
                <TouchableOpacity onPress={()=>{this.setState({visibleModalSettings: false, symbolEdit: String.fromCodePoint(9998), editableNameConversation: false})}} style={{backgroundColor: "#D3D3D3", borderRadius: 20, justifySelf: "flex-end", alignSelf: "center"}}>
                  <Text style={{fontSize: 20, padding: 5, color: "red"}}>Закрыть</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <FlatList 
            ref = "flatList"
            style={{height: windowHeight*0.84}}
            data={this.state.DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}
          />

          <View style={{height: windowHeight*0.08, backgroundColor: "#808080", flexDirection: "row"}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.visibleModalImagePicker}>
              <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={{alignItems: "center", backgroundColor: "#FFE4E1", height:"40%", width:"70%", borderRadius: 30}}>

                    <ImageLibrary/>
                
                    <ImageCamera/>

                  <View style={{height: "33.33%", width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity onPress={()=>{this.setState({visibleModalImagePicker: false})}} style={{height: "60%", width:"60%", justifyContent: "center", backgroundColor: "#D3D3D3", borderRadius: 20}}>
                      <Text style={{fontSize: 20, color: "red", textAlign: "center", fontWeight: "bold"}}>Закрыть</Text>
                    </TouchableOpacity>
                  </View>
                  

                </View>
              </View>
            </Modal>


            <TouchableOpacity onPress={()=>{this.setState({visibleModalImagePicker: true});}} style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: "#4169E1"}}>
              <Text style={{color: "white", fontSize: 25}}>+</Text>
            </TouchableOpacity>

            <TextInput
              multiline={true}
              onChangeText={(text) => {this.setState({inputText: text})}}
              style={{flex: 6}}
              value = {this.state.inputText}
              placeholder="Введите сообщение..."
            />

            <TouchableOpacity onPress={this.sendMessage} style={{flex: 1.3, justifyContent: "center", alignItems: "center",  backgroundColor: "#4169E1"}}>
              <Text style={{color: "white", fontSize: 25}}>{String.fromCodePoint(10146)}</Text>
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}