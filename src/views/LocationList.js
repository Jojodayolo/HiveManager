import { StyleSheet, View, Button } from "react-native";
import React, { useEffect } from "react";
import { LocationTile } from "../components/LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { defaultStyles } from "./Styles";
import DeleteMenu from "../components/DeleteMenu";

export const LocationList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  var locations = useSelector((state) => state.locations);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Hinzufügen"
          onPress={() => navigation.navigate("LocationForm")}
        />
      ),
      headerTitle: "Übersicht",
    });
  });

  return (
    <View style={[styles.container, defaultStyles.container]}>
      <SuperGridSectionList
        itemDimension={100}
        data={locations}
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
