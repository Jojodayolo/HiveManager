import { StyleSheet, View, Button } from "react-native";
import React, { useEffect } from "react";
import { LocationTile } from "../components/LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import { defaultStyles } from "./Styles";
import DeleteMenu from "../components/DeleteMenu";

export const LocationList = ({ route }) => {
  const navigation = useNavigation();
  const uid = route.params.uid;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Hinzufügen"
          onPress={() => navigation.navigate("LocationForm", { uid })}
        />
      ),
      headerLeft: () => (
        <Button
          title="Ausloggen"
          onPress={() => navigation.navigate("TitleScreen")}
        />
      ),
      headerTitle: "Übersicht",
    });
  });

  return (
    <View />
    /*<View style={[styles.container, defaultStyles.container]}>
      <SuperGridSectionList
        itemDimension={100}
        data={locations}
        spacing={30}
        maxItemsPerRow={5}
        flex={1}
        renderItem={({ item }) => <LocationTile location={item} />}
      />
    </View>*/
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
