import { StyleSheet, Text, View, Appearance } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TitleScreen } from './src/screens/TitleScreen';
import { LocationOverview } from './src/screens/LocationOverview';
import { LocationCreator } from './src/screens/LocationCreator';
import { LocationViewer } from './src/screens/LocationViewer';
import { HiveCreator } from './src/screens/HiveCreator';
import { DocumentationCreator } from './src/screens/DocumentationCreator';
import { DocumentationViewer } from './src/screens/DocumentationViewer';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
const colorScheme = Appearance.getColorScheme();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="TitleScreen">
        <Stack.Screen
          name="TitleScreen"
          component={TitleScreen}
          backgroundColor="#fff"
          options={{ title: 'HiveManager'}}
        />
        <Stack.Screen name="LocationOverview" component={LocationOverview} />
        <Stack.Screen name="LocationCreator" component={LocationCreator} />
        <Stack.Screen name="LocationViewer" component={LocationViewer} />
        <Stack.Screen name="HiveCreator" component={HiveCreator} />
        <Stack.Screen name="DocumentationCreator" component={DocumentationCreator} />
        <Stack.Screen name="DocumentationViewer" component={DocumentationViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleBar:{

  },
});
