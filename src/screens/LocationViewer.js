import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, FlatList, Text, View } from 'react-native';

export const LocationViewer = () => {
    return (
      <View style={[styles.container, {flexDirection: "row"}]} >
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <Text style={{color: 'list'}}>hives</Text>
        </View> 
        <View style={{ flex: 2, backgroundColor: "white" }}>
            <Text style={{color: 'black'}}>documentations</Text>
        </View>
      </View>
      
    );
  } 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
    });