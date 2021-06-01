import React, {Component} from 'react';
import {View,
        Text,
        TextInput,
        StyleSheet,
        TouchableOpacity,
        Alert,
        Image,
        Modal,
        ScrollView,
        KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from "firebase";


export default class WelcomeScreen extends Component{

  constructor(){
    super();
    this.state = {
      emailId:'',
      password:'',
      isModalVisible:'false',
      name:'',
      contact:'',
      address:'',
      emaild:'',
      confirmpassword:'',

    }
  }

  
  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then((response)=>{
      return Alert.alert("Welcome Back.")
    })
    .catch(function(error){

      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  showModal = ()=>{
    return(
      <Modal
      animationType = "fade"
      transparent={true}
      visible = {this.state.isModalVisible}
      >
      <View style = {styles.modalContainer}>
      <ScrollView style = {{width:'100%'}}>
      <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
      <Text
      style = {styles.modalTitle}>
      Register
      </Text>
      <TextInput style = {styles.fotmTextInput}
      placeholder = {"Name"}
      maxLength = {20}
      onChangeText = {(text)=>{
        this.setState({
          name:text
        })
      }} />
       <TextInput style = {styles.fotmTextInput}
      placeholder = {"Contact"}
      maxLength = {10}
      keyboardType={'numeric'}
      onChangeText = {(text)=>{
        this.setState({
          contact:text
        })
      }} />
       <TextInput style = {styles.fotmTextInput}
      placeholder = {"Address"}
      multiline = {true}
      onChangeText = {(text)=>{
        this.setState({
          address:text
        })
      }} />
       <TextInput style = {styles.fotmTextInput}
      placeholder = {"Email Address"}
      maxLength = {10}
      keyboardType={'email-address'}
      onChangeText = {(text)=>{
        this.setState({
          emailId:text
        })
      }} />
       <TextInput style = {styles.fotmTextInput}
      placeholder = {"Password"}
      secureTextEntry = {true}
      onChangeText = {(text)=>{
        this.setState({
          password:text
        })
      }} />
       <TextInput style = {styles.fotmTextInput}
      placeholder = {"Confirm Password"}
      secureTextEntry = {true}
      onChangeText = {(text)=>{
        this.setState({
          confirmpassword:text
        })
      }} />
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
      </Modal>

    )
  }
  
  render(){
    return(
     <View style={styles.container}>
      <View style={styles.profileContainer}>
            <Text style = {styles.title}> Welcome to La Ayuda</Text> 

             <Text  style = {styles.text}> LOGIN </Text>
      </View>
      <View style = {styles.buttonContainer}>
      <TextInput
        style={styles.loginbox}
        placeholder = "example@laayuda.com"
        placeholderTextColor=""
        keyboardType = 'email-address'
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
      />

      <TextInput
       style={styles.loginbox}
       secureTextEntry = {true}
       placeholder ="Enter Password"
       placeholderTextColor=""
       keyboardType = 'email-address'
       onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}
      />

      <TouchableOpacity
      style={[styles.button,{marginBottom:20,marginTop:20}]}
      onPress = {()=>{this.userLogin(this.state.emailId,this.state.password),(  this.props.navigation.navigate('DonateScreen'))}}
      >
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={[styles.button,{marginBottom:30,marginTop:30}]}
      onPress = {()=>{this.userSignUp(this.state.emailId,this.state.password)}}
      >
      <Text style={styles.buttonText}>Join Us</Text>
      </TouchableOpacity>

     </View>
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
  
  loginbox:{
    width:200,
    height:50,
    borderWidth:1.5,
    borderColor:'#3F5755',
    fontSize:15,
    margin:10,
    paddingLeft:10,
    color:'#2D3A39',
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
/*https://assets2.lottiefiles.com/private_files/lf30_YR7KYK.json*/