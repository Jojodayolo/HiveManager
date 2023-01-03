import { Appearance } from "react-native";
import { DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TitleScreen } from "./src/views/TitleScreen";
import { LocationShow } from "./src/views/LocationShow";
import { LocationForm } from "./src/views/LocationForm";
import { LocationList } from "./src/views/LocationList";
import { HiveForm } from "./src/views/HiveForm";
import { DocumentationForm } from "./src/views/DocumentationForm";
import { DocumentationViewer } from "./src/views/DocumentationViewer";

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
          
        <Stack.Screen name="LocationShow" component={LocationShow} />
        <Stack.Screen name="LocationForm" component={LocationForm} />
        <Stack.Screen name="LocationList" component={LocationList} />
        <Stack.Screen name="HiveForm" component={HiveForm} />
        <Stack.Screen name="DocumentationForm" component={DocumentationForm}/>
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
