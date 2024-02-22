import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity,} from 'react-native';
import {Colors, DebugInstructions, Header} from 'react-native/Libraries/NewAppScreen';

const App =  () =>
 
{ //starts here

  

  const onPressLogin = () => {
    // login operation will go here
    /*
    const email=getEmailFromInput();
    const password=getPasswordFromInput();

    const query='SELECT * FROM uID, email, password from user where email=user and password=password';
    connection.query(query, [email, password],(err,results)=>{
      if(err){
        console.error('Login failed:',err);
        return;
      }
      if(results.length===1){
        console.log('Login successful.Welcome,',results[0].email);
      }
      else{
        console.error('Invalid email or password');
      }
      connection.end();
    })
*/
  };

  const onPressForgotPassword = () => {
    // forgot password operation will go here
  };

  const onPressSignUp = () => {
    // sign up hyperlink will go here
    
  };


const [state,setState] = useState
(
  {
    email: '',
    password: '',
})

return (
    <View style={styles.container}>
    <Text style={styles.title}> SELECT PARK </Text> 
    <View style={styles.inputView}>


    <TextInput //email color
        style={styles.inputText}
        placeholder="EMAIL"
        placeholderTextColor="#000000"
        onChangeText={text => setState({email:text})}/>
    </View>


  <View style={styles.inputView}>
  <TextInput //pssword color
    style={styles.inputText}
    secureTextEntry
    placeholder="PASSWORD"
    placeholderTextColor="#000000"
    onChangeText={text => setState({password:text})}/>  
    </View>

    <TouchableOpacity //forgottten password
    onPress = {onPressForgotPassword}>
    <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity //log in 
    onPress = {onPressLogin}
    style={styles.loginBtn}>
    <Text style={styles.loginText}>LOGIN </Text>
   </TouchableOpacity>

  <TouchableOpacity //Sign up link
  onPress = {onPressSignUp}>
  <Text style={styles.forgotAndSignUpText}>New Here? Sign Up Today! </Text>
  </TouchableOpacity>
  </View>
  );

} //ends here

  const styles = StyleSheet.create
  ({//start here
  container: 
  {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
//This is the title card
  title:
  { 
      fontWeight: "bold",
      fontSize:50,
      color:"#000000",
      marginBottom: 40,
  },

//This is the box for the input
    inputView:
  {
      width:"90%",
      backgroundColor:"#FFFFFF",
      borderRadius:30,
      height:40,
      marginBottom:20,
      justifyContent:"center",
      padding:30
  },
  inputText:
  {
      height:40,
      color:"black"
  },

//forgotten passwod font size
  forgotAndSignUpText:
  {
      color:"white",
      fontSize:15
  },


  signupLinkText: {
    color: '#000000',
    textDecorationLine: 'underline',
  },

  
//log in button
  loginBtn:
  {
      width:"90%",
      backgroundColor:"#ADD8E6",
      borderRadius:25,
      height:60,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
    marginBottom:40
  },
}); //end here

//adding practice mysql
/*
const mysql=require('mysql')
const connection=mysql.createConnection({
  host:'GWTC51427',
  user:'magal',
  password:'database',
  database:'select_park'
})
 
connection.connect((err)=>{
  if(err){
    console.error('Error connecting to Mysql:',err);
    return;
  }
  console.log('Connected to Mysql');
})
*/

export default App;