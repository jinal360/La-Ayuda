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


  export default class DonateScreen extends Component{
    render(){
      return(
        <View style= {styles.container}>

          <Text style = {styles.title}> La Ayuda App</Text> 

          <Text  style = {styles.text}> DONATE </Text>
          

      <TextInput
       style={styles.textInput}
       placeholder ={"Name of the thing"}
       placeholderTextColor="gray"
       onChangeText={(text)=>{
          this.setState({
            name: text
          })
        }}
      />

            <TextInput
       style={styles.textInput}
       placeholder ={"quntity of your thing"}
       maxLength = {10}
       keyboardType= {'numeric'}
       placeholderTextColor="gray"
       onChangeText={(text)=>{
          this.setState({
            name: text
          })
        }}
      />

          <TextInput
       style={styles.textInput}
       placeholder ={"discription of your thing"}
        multiline = {true}
       placeholderTextColor="gray"
       onChangeText={(text)=>{
          this.setState({
            name: text
          })
        }}
      />

      <TouchableOpacity
      style={[styles.button,{marginBottom:30,marginTop:30}]}
      
      >
      <Text style={styles.buttonText}> Donate</Text>
      </TouchableOpacity>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor :'#F88E05',
    alignItems:'center',
    justifyContent:'center'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:30,
    fontWeight:'200',
    paddingBottom:30,
    color:'#60FFE8',
    marginTop:40,
    margin:10
  },

    text:{
    fontSize:25,
    paddingBottom:30,
    color:'#FFFF3D'
  },
  
  textInput:{
    width:200,
    height:50,
    borderWidth:1.5,
    borderColor:'#3F5755',
    fontSize:15,
    marginLeft:30,
    margin:20,
   paddingLeft:10,
    color:'#2D3A39',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    backgroundColor:'#0ff1ce',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:5
    },
    shadowOpacity:0.60,
    shadowRadius:10,
    elevation:15,
  },
  buttonText:{
    color:'',
    fontWeight:250,
    fontSize:15
  },
  buttonContainer:{
    fles:1,
    alignItems:'center'
  }
})