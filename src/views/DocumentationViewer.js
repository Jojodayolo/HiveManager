import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";



export const DocumentationViewer = ({route}) => {
  console.log("DocViewer:")
  console.log(route)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{color: 'white'}}>DocumentationViewer</Text>
      </View>
    );
  } 

