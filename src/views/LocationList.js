import { StyleSheet, View, Button } from "react-native";
import React, { useEffect } from "react";
import { LocationTile } from "./LocationTile";
import SuperGridSectionList from "react-native-super-grid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export const LocationOverview = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => navigation.navigate("LocationCreator")}
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
