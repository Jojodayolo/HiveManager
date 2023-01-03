import { StyleSheet, View, Button } from "react-native";
import React, { useEffect } from "react";
import { LocationTile } from "../components/LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";

export const LocationList = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => navigation.navigate("LocationForm")}
        />
      ),
    });
  });

  const [items, setLocation] = React.useState([
    { name: "Hof1", image: "../assets/imgs/Bauernhof.png" },
    { name: "Hof2", image: "../assets/imgs/Bauernhof.png" },
    { name: "Hof3", image: "../assets/imgs/Bauernhof.png" },
    { name: "Hof4", image: "../assets/imgs/Bauernhof.png" },
    { name: "Hof5", image: "../assets/imgs/Bauernhof.png" },
  ]);

  return (
    <View style={styles.container}>
      <SuperGridSectionList
        itemDimension={100}
        data={items}
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
