import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import React from "react";
import {LocationTile} from './LocationTile';
import  SuperGridSectionList  from 'react-native-super-grid';

export const LocationOverview = () =>  {

  const [items,setLocation] = React.useState([
    {name: 'Hof1', image: './Bauernhof.png'},
    {name: 'Hof2', image: './Bauernhof.png'},
    {name: 'Hof3', image: './Bauernhof.png'},
    {name: 'Hof4', image: './Bauernhof.png'},
    {name: 'Hof5', image: './Bauernhof.png'},
  ]);

  items.push({name:'add'})

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
  
  