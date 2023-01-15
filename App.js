import { Appearance } from "react-native";
import { DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { LocationShow } from "./src/views/LocationShow";
import { LocationForm } from "./src/views/LocationForm";
import { LocationCamera } from "./src/views/LocationCamera";
import { LocationList } from "./src/views/LocationList";
import { HiveForm } from "./src/views/HiveForm";
import { DocumentationForm } from "./src/views/DocumentationForm";
import { DocumentationViewer } from "./src/views/DocumentationViewer";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { defaultStyles } from "./src/views/Styles";
import { MenuProvider } from "react-native-popup-menu";
import { SafeAreaView } from "react-navigation";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  Store.persistor.purge();
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <NavigationContainer
          //theme={DarkTheme}
          style={defaultStyles.navigationHeader}
        >
          <MenuProvider>
            <Stack.Navigator initialRouteName="LocationList">
              <Stack.Screen name="LocationShow" component={LocationShow} />
              <Stack.Screen name="LocationForm" component={LocationForm} />
              <Stack.Screen name="LocationCamera" component={LocationCamera} />
              <Stack.Screen name="LocationList" component={LocationList} />
              <Stack.Screen name="HiveForm" component={HiveForm} />
              <Stack.Screen
                name="DocumentationForm"
                component={DocumentationForm}
              />
              <Stack.Screen
                name="DocumentationViewer"
                component={DocumentationViewer}
              />
            </Stack.Navigator>
          </MenuProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
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

/*
 */
