import { StyleSheet, Text, View, Appearance } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TitleScreen } from "./src/views/TitleScreen";
import { LocationOverview } from "./src/views/LocationOverview";
import { LocationCreator } from "./src/views/LocationCreator";
import { LocationViewer } from "./src/views/LocationViewer";
import { HiveCreator } from "./src/views/HiveCreator";
import { DocumentationCreator } from "./src/views/DocumentationCreator";
import { DocumentationViewer } from "./src/views/DocumentationViewer";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const colorScheme = Appearance.getColorScheme();

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="TitleScreen">
        <Stack.Screen
          name="TitleScreen"
          component={TitleScreen}
          backgroundColor="#fff"
          options={{ title: "HiveManager" }}/>
          
        <Stack.Screen name="LocationOverview" component={LocationOverview} />
        <Stack.Screen name="LocationCreator" component={LocationCreator} />
        <Stack.Screen name="LocationViewer" component={LocationViewer} />
        <Stack.Screen name="HiveCreator" component={HiveCreator} />
        <Stack.Screen name="DocumentationCreator" component={DocumentationCreator}/>
        <Stack.Screen name="DocumentationViewer" component={DocumentationViewer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// TODO find a File for that
/*const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  TitleBar: {},
});*/
