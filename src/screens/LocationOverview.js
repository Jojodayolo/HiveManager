import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component, useState } from "react";
import LocationTile from './LocationTile';
import { AppRegistry } from 'react-native-web';


export const LocationOverview = () =>  {
  return (
    <View style={styles.container} >
        <Text style={{color: 'white'}}>LocationOverview</Text>
        <LocationTile style={styles.LocTile}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderColor: 'white',
      flexWrap:'wrap',

  },
  LocTile:{
    flex:1,
    width: null,
    height:null,
    //resizeMode: 'contain'
  }
  });
  
  