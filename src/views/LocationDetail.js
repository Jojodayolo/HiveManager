import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Doc 1",
    date: "12.12.2012",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Doc2",
    date: "12.12.2012",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Doc 3",
    date: "12.12.2012",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
    <Text style={styles.title}>{item.date}</Text>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export const LocationDetail = () => {
  const navigation = useNavigation();


  //Item that gets Highlighted when selected
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#157EFB" : "#38343C";
    const color = item.id === selectedId ? "white" : "black";
    const onDocSelected = () => {
      setSelectedId(item.id);
      navigation.navigate("DocumentationViewer");
    }
    return (
      <Item
        item={item}
        onPress={onDocSelected}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hiveTitle}>Placeholder Hive Name</Text>

      <Button title='Dokumentationen Hinzufügen' style={styles.docButton} onPress={() => navigation.navigate('DocumentationForm')}/>
      <FlatList // The list of the Documentation for the selected hive
      style={{ flex: 1, backgroundColor: "black", marginTop: 20 }}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: "white",
    width: '70%'
    
  },
  hiveTitle:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    margin:20
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
  docButton:{
    margin:20,
    padding: 20
  },
});
