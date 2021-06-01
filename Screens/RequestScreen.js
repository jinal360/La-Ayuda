import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  } from 'react-native';
  import {Header} from 'react-native-elements'

  export default class RequestScreen extends Component{

    constructor(){
      super()
      setState={
        thingName:'',
      }
    }
    render(){
      return(
        <View>
        <View>
        <Header
        centerComponent = {{text:"lets search" , style:{ backgroundColor: 'blue', alginItem:'center', justfiyContent:'center'}}}
       />
        </View>

        <TextInput
        style={styles.textInput}
        placeholder = "What you need"
        onChangeText = {(text)=>{
          this.setState({
          thingName:text
          })
        }}
        />

            <TextInput
        style={styles.textInput}
        placeholder = "Why you need this"
        onChangeText = {(text)=>{
          this.setState({
          thingName:text
          })
        }}
        />    
        </View>
      )
    }
  }