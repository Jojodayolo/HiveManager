/**
 * LocationShow.js
 * 
 * View relevant for displaying a Locations content.
 */
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LocationDetail } from "./LocationDetail";
import { useSelector } from "react-redux";
import { defaultStyles } from "./Styles";
import DeleteMenu from "../components/DeleteMenu";
import {
  DividerVertical,
  DividerHorizontal,
} from "../components/designComonents";

//The List Item to be rendered
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[defaultStyles.hiveListItem, backgroundColor]}
    onPress={onPress}
  >
    <View flex={1} style={{ width: "80%" }}>
      <Text style={{ paddingLeft: 15 }}>{item.name || ""}</Text>
    </View>
    <View flex={2} style={{}}>
      <DeleteMenu />
    </View>
  </TouchableOpacity>
);


export const LocationShow = ({ route }) => {
  const navigation = useNavigation();
  var locations = useSelector((state) => state.locations);
  var hives = useSelector((state) => state.hives.hives);
  const [selectedId, setSelectedId] = useState();
  
  /**
   * useEffect()
   * Function used to add buttons to the header and set the header title to the name of the current location.
   */
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

  /**
   * renderItem()
   * Function responsible for displaying an Item in the List of Hives.
   */
  const renderItem = ({ item }) => {
    const backgroundColor = item.uuid === selectedId ? "#157EFB" : "white";
    const color = item.uuid === selectedId ? "white" : "black";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.uuid)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const uuid = route.params.uuid;

  //Get all locations and filter the Selected one
  const location = locations.filter((loc) => loc.uuid === uuid);

  //get all hives and filter the hives that belong to the location
  const localHives = hives.filter((hive) =>
    location[0].hiveIDs.includes(hive.uuid)
  );

  return (
    <View
      style={[{ flexDirection: "row", alignItems: "stretch", height: "100%" }]}
    >
      <View style={{ flex: 1 }}>
        <FlatList // The list of the Hives at the selected Location
          style={{ marginBottom: 30 }}
          data={localHives}
          renderItem={renderItem}
          keyExtractor={(item) => item.uuid}
          ListEmptyComponent={
            <Text style={{ alignSelf: "center" }}>Currently no Hives here</Text>
          }
          contentContainerStyle={defaultStyles.hiveList}
          ItemSeparatorComponent={() => <DividerHorizontal />}
          contentInset={{ top: 0, bottom: 20, left: 0, right: 0 }}
          contentInsetAdjustmentBehavior="automatic"
        />
      </View>
      <DividerVertical style={{ flex: 2 }} />
      <LocationDetail style={{ flex: 3 }} uuid={selectedId} />
    </View>
  );
};