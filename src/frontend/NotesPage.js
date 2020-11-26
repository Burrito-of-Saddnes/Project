import React, { Component } from 'react';
import { Image, View, Platform, TextInput, Modal, Text, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


const renderItem=({item})=>{
    return(
        <View>
            <View></View>
            <TextInput style={{borderWidth: 1, width:"100%"}}></TextInput>
        </View>
    );
}

export default class NotesPage extends Component{
    constructor(props){
        super(props);
        this.state={
            listOfFields: []
        }
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.listOfFields}
                    renderItem={renderItem}
                >
                </FlatList>
            </View>
        );
    }

}