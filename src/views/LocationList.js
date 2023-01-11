import { StyleSheet, View, Button } from "react-native";
import React, { useEffect } from "react";
import { LocationTile } from "../components/LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(locations);

  return (
    <View style={styles.container}>
      <SuperGridSectionList
        itemDimension={100}
        data={locations}
        spacing={30}
        maxItemsPerRow={5}
        renderItem={({ item }) => <LocationTile location={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    borderColor: "white",
  },
});
