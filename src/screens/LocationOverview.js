import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import React from "react";
import {LocationTile} from './LocationTile';
import  SuperGridSectionList  from 'react-native-super-grid';


export const LocationOverview = () =>  {


  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <View style={styles.container} >
      <SuperGridSectionList 
        itemDimension={120} 
        data={items}
        spacing={40}
        maxItemsPerRow={20}
        renderItem={({item}) => <LocationTile name={item.name} /> } 
        />
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{
      justifyContent: 'center',
      padding: 10,
      borderColor: 'white',
  },
  });
  
  