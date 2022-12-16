import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, Image, Button, Text, View } from 'react-native';


export const TitleScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={{color: 'white'}}>Title Screen</Text>
        <Image source={require('./tempLogo.jpg')} style={{width: 100, height: 100}}/>
        <Button title='Start' onPress={() => navigation.navigate('LocationOverview')}/>
      </View>
    );
  } 