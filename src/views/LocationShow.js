import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LocationDetail } from "./LocationDetail";
import { useDispatch, useSelector } from "react-redux";
import { filterHives } from "../redux/actions";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

//The List Item to be rendered
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export const LocationShow = ({ route }) => {
  const navigation = useNavigation();
  var locations = useSelector((state) => state.locations);
  var hives = useSelector((state) => state.hives);
  //Set the title to the Location Name
  const uuid = route.params.uuid;
  const location = locations.filter((loc) => loc.uuid === uuid);
  console.log(hives);

  const localHives = hives.filter((hive) => location[0].hiveIDs.includes(hive));
  //console.log(localHives);
  //console.log(location[0].name);

  useEffect(() => {
    navigation.setOptions({
      title: location[0].name,
      headerRight: () => (
        <Button
          title="Hinzufügen"
          onPress={() => navigation.navigate("HiveForm", { uuid: uuid })}
        />
      ),
    });
  });

  const getLocalHives = () => {};

  //Item that gets Highlighted when selected
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#157EFB" : "#38343C";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={[styles.container, { flexDirection: "row" }]}>
      <FlatList // The list of the Hives at the selected Location
        style={{ flex: 1, backgroundColor: "black" }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <LocationDetail style={{ flex: 2 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  item: {
    backgroundColor: "#38343C",
    padding: 15,
    marginVertical: 0.5,
    marginHorizontal: 0,
  },
  title: {
    color: "white",
  },
});
