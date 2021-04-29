import {
  
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import { TextInput } from 'react-native';


export default class  App extends React.Component {

  constructor(){
    super();
    this.state = {
        text : '',
        displaytext :''
    }
  }
render(){
  return (
    <SafeAreaProvider style={styles.container}>
      
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff',fontFamily:'Herculanum',fontSize : '50px' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}

 
/>

<TextInput
placeholder ='Enter Word'
style={styles.inputtext}
onChangeText={text=>{this.setState({
  text : text
})}}
value = {this.state.text}
/>



<TouchableOpacity 
style={styles.button}
onPress= {()=>this.setState({displaytext:this.state.text})}
>
  <Text style={styles.buttontext}>Press me</Text>
</TouchableOpacity>

<Text style={styles.displayText}> {this.state.displaytext}</Text>

    </SafeAreaProvider>
  );
}
}

const styles = StyleSheet.create({

  container:{
    

  },
  inputtext :{
  
    textAlign: 'center',
    margin: '200px',
    alignSelf:'center',
    alignContent:'center',
    width: '250px',
    height: '40px',
    borderWidth: 1,
    alignContent: 'center'
  
    
  },
  buttontext:{
   
    alignSelf:'center',
    marginTop : '-150px',
    backgroundColor: '#fc6b',
    width:'100px',
    height: '28px',
    padding: '3px',
    textAlign:'center',
    fontWeight:'bold',
    borderRadius: '20px',
   
  },
  button:{
    alignContent:'center'
  },
  displayText:{
    alignSelf: 'center',
    justifyContent:'center',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: '50px'

  }

});
