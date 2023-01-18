import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LocationDetail } from "./LocationDetail";
import { defaultStyles } from "./Styles";
import DeleteMenu from "../components/DeleteMenu";
import {
  DividerVertical,
  DividerHorizontal,
} from "../components/designComonents";
import { getHives, removeHive } from "../../firebaseConfig";

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
      <DeleteMenu onDelete={() => removeHive(item.locID, item.hiveID)} />
    </View>
  </TouchableOpacity>
);

export const LocationShow = ({ route }) => {
  const navigation = useNavigation();
  const [hiveList, setHiveList] = useState([]);
  const [selectedHive, setSelectedHive] = useState(null);
  const location = route.params.location;

  const renderItem = ({ item }) => {
    const backgroundColor = item === selectedHive ? "#157EFB" : "white";
    const color = item === selectedHive ? "white" : "black";
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedHive(item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  //Get all locations and filter the Selected one
  useEffect(() => {
    try {
      getHives(location.docID).then((hives) => setHiveList(hives));
    } catch (e) {}
  });

  //Setting the Navigation Title and Buttons
  useEffect(() => {
    navigation.setOptions({
      title: location.name,
      headerRight: () => (
        <Button
          title="Hinzufügen"
          onPress={() => {
            navigation.navigate("HiveForm", { locID: location.docID });
          }}
        />
      ),
    });
  });

  return (
    <View
      style={[{ flexDirection: "row", alignItems: "stretch", height: "100%" }]}
    >
      <View style={{ flex: 1 }}>
        <FlatList // The list of the Hives at the selected Location
          style={{ marginBottom: 30 }}
          data={hiveList}
          renderItem={renderItem}
          keyExtractor={(item) => item.hiveID}
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
      <LocationDetail
        style={{ flex: 3 }}
        hive={selectedHive}
        locID={location.docID}
      />
    </View>
  );
};
