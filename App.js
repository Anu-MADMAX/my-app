import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component  {
  
  pressingButton2 = () =>{
      alert('Called a function')
  }


  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome! Anu Sharma's app.  </Text>
        <Text style = {{color: 'black'}}> How are you doing today?</Text>
        <Button title = "Post" color = "black" />
        <TouchableOpacity style = {{height:50, paddingHorizontal : 10, backgroundColor: 'yellow', justifyContent:'center', alignItems: 'center',
        
      }} onPress = {() => this.pressingButton2()}> 
          <Text style = {{fontSize : 25}}> Submit </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
