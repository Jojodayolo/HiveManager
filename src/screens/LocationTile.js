import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';

export const LocationTile  = (props) => {

    const navigation = useNavigation();
    if(props.name === 'add'){
    return (
        //add Button gets added
        <TouchableOpacity onPress={() => navigation.navigate('LocationCreator')}>
            <View style={styles.container } >
                <Image source={require('./plus-icon.jpg')} style={styles.img}/>
            </View>
        </TouchableOpacity>
        );
    } else {
        return (
<TouchableOpacity onPress={() => navigation.navigate('LocationViewer')}>
<View style={styles.container } >
                <Image source={require('./Bauernhof.png')} style={styles.img}/>
                <Text style={styles.tileText}>{props.name}</Text>
            </View>
</TouchableOpacity>
        ); 
    }

}



const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    height: 175,
    textAlign: 'center'
},
img:{
    width: 100,
    height:100,
    resizeMode: 'contain'
},
tileText:{
    textAlign: 'center',
    color: 'white'
}
});
