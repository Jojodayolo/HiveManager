import { Image, StyleSheet, Text, View } from 'react-native';
import React, {  Component } from "react";


export default class LocationTile extends Component {
    render(props){
        return (
            <View style={styles.container } >
                
                <Image source={require('./Bauernhof.png')} style={styles.img}/>
                <Text style={{color: 'white'}}>Test Hof</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
},
img:{
    flex:1,
    width: 200,
    height:300,
    resizeMode: 'contain'
}
});
