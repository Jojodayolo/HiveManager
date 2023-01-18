/**
 * LocationList.js
 *
 * View that lists all currently existing Locations in a roster.
 */
import { StyleSheet, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { LocationTile } from "../components/LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import { defaultStyles } from "./Styles";
import { getLocations, Logout } from "../../firebaseConfig";

export const LocationList = ({ route }) => {
  const [locList, setLocList] = useState([]);
  const navigation = useNavigation();

  /**
   * Function used to add Buttons to the header.
   */
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Hinzufügen"
          onPress={() => navigation.navigate("LocationForm")}
        />
      ),
      headerLeft: () => (
        <Button
          title="Ausloggen"
          onPress={() => {
            Logout()
              .then(console.log("Loged Out"))
              .then(navigation.navigate("TitleScreen"));
          }}
        />
      ),
      headerTitle: "Übersicht",
    });
  });
  useEffect(() => {
    //getLocations().then((list) => setLocList(list));
    console.log(locList);
    const intervalId = setInterval(() => {
      getLocations().then((list) => setLocList(list));
    }, 1000); // in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={[styles.container, defaultStyles.container]}>
      <SuperGridSectionList
        itemDimension={100}
        data={locList}
        spacing={30}
        maxItemsPerRow={5}
        flex={1}
        renderItem={({ item }) => <LocationTile location={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    margin: 10,
    borderColor: "white",
  },
});
