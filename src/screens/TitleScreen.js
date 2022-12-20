import { DarkTheme } from '@react-navigation/native';
import { StyleSheet, Image, Button, Text, View } from 'react-native';


export const TitleScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text style={styles.title}>Hive Manager</Text>
        <Image style={styles.img} source={require('./tempLogo.jpg')} />
        <Button title='Start' onPress={() => navigation.navigate('LocationOverview')}/>
      </View>
    );
  } 

  const styles = StyleSheet.create({
    title:{
      fontSize: 40,  
      textAlign: 'center',
      color: 'white'
    },
    img: {
      width: 200,
      height: 200,
    }
    });