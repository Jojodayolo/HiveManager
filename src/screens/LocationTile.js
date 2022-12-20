import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';


export const LocationTile  = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container } >
            <Image source={require('./Bauernhof.png')} style={styles.img}/>
            <Text style={styles.tileText}>{props.name} Test</Text>
            <Button title={props.name} onPress={() => navigation.navigate('LocationViewer')}/>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    height: 150,
    textAlign: 'center'
},
img:{
    width: null,
    height:null,
    resizeMode: 'contain'
},
tileText:{
    textAlign: 'center',
    color: 'white'
}
});
