import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from "react";


export const LocationTile  = (props) => {
        return (
            <View style={styles.container } >
                <Image source={require('./Bauernhof.png')} style={styles.img}/>
                <Text style={{color: 'white'}}>{props.name} Test</Text>
                <Button title={props.name}/>
            </View>
        );
}

const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,

},
img:{
    width: null,
    height:null,
    resizeMode: 'contain'
}
});
