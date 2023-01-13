import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LocationDetail } from "./LocationDetail";
import { useDispatch, useSelector } from "react-redux";

//TODO: - what if no Hives exist?

//The List Item to be rendered
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
    <Text style={styles.title}>{item.name || 'Empty'}</Text>
  </TouchableOpacity>
);

export const LocationShow = ({ route }) => {
  const navigation = useNavigation();
  var locations = useSelector((state) => state.locations);
  var hives = useSelector((state) => state.hives.hives);
  const renderItem = ({ item }) => {
    const backgroundColor = item.uuid === selectedId ? "#157EFB" : "#38343C";
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
  //Set the title to the Location Name
  const uuid = route.params.uuid;
  //Get all locations and filter the Selected one 
  const location = locations.filter((loc) => loc.uuid === uuid);

  //get all hives and filter the hives that belong to the location
  const localHives = hives.filter((hive) => location[0].hiveIDs.includes(hive.uuid));

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

  const [selectedId, setSelectedId] = useState();
  try {
    const [selectedId, setSelectedId] = useState(localHives[0].uuid);
  } catch (error) {

  }

  //Item that gets Highlighted when selected
  if(localHives.length === 0){
    console.log(localHives)
    return(    
    <View style={[styles.container, { flexDirection: "row" }]}>

      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={{color: 'white', textAlign: 'center', padding:20}} >Currently no Hives here</Text>
      </View>
      <View style={{ flex: 2, backgroundColor:"#38343C"}} />
    </View>
  );
  }




  return (
    <View style={[styles.container, { flexDirection: "row" }]}>
      <FlatList // The list of the Hives at the selected Location
        style={{ flex: 1, backgroundColor: "black" }}
        data={localHives}
        renderItem={renderItem}
        keyExtractor={(item) => item.uuid}
        ListEmptyComponent={<View/>}
      />
      <LocationDetail style={{ flex: 2 }} uuid={selectedId} />
    </View>
  );
  //
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
