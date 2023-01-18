import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "./Styles";
import {
  DividerHorizontal,
  DividerVertical,
} from "../components/designComonents";
import { getDocumentations } from "../../firebaseConfig";

// needs a style rework text is alwys black
const Item = ({ item, onPress }) => (
  <TouchableOpacity style={[defaultStyles.documentationItem]} onPress={onPress}>
    <Text style={styles.name}>
      {new Date(item.date).getDate() +
        "." +
        (new Date(item.date).getMonth() + 1) +
        "." +
        new Date(item.date).getFullYear() +
        " " +
        new Date(item.date).getHours() +
        ":" +
        new Date(item.date).getMinutes()}
    </Text>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

export const LocationDetail = (props) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [localDocs, setLocalDocs] = useState([]);
  const hive = props.hive;
  const locID = props.locID;
  //Item that gets Highlighted when selected
  const renderItem = ({ item }) => {
    const onDocSelected = () => {
      setSelectedId(item.docID);
      navigation.navigate("DocumentationViewer", {
        doc: item,
      });
    };
    return <Item item={item} onPress={onDocSelected} />;
  };

  useEffect(() => {
    try {
      getDocumentations(locID, hive.hiveID).then((docs) => setLocalDocs(docs));
    } catch (error) {}
  });

  const onDocForm = () => {
    navigation.navigate("DocumentationForm", {
      hiveID: hive.hiveID,
      locID: locID,
    });
  };

  //dont display a list if there are no docs or display nothing if no hive is selected(second should only happen if a location has no hives)
  if (props.hive === null || hive === 0) {
    return <View style={defaultStyles.docDetailList} />;
  } else if (localDocs.length === 0) {
    return (
      <View style={styles.container}>
        <Text flex={1} style={styles.hiveTitle}>
          {hive.name}
        </Text>
        <Button
          flex={2}
          title="Dokumentationen Hinzufügen"
          style={styles.docButton}
          onPress={onDocForm}
        />
        <View
          flex={3}
          style={[
            defaultStyles.docDetailListContentContainerStyle,
            defaultStyles.docDetailListStyle,
          ]}
        />
      </View>
    );
  }

  //Full render if data is available
  return (
    <View style={styles.container}>
      <Text style={styles.hiveTitle}>{hive.name || ""}</Text>
      <Button
        title="Dokumentationen Hinzufügen"
        style={styles.docButton}
        onPress={onDocForm}
      />
      <FlatList // The list of the Documentation for the selected hive
        style={defaultStyles.docDetailListStyle}
        data={localDocs}
        renderItem={renderItem}
        keyExtractor={(item) => item.docID}
        contentContainerStyle={defaultStyles.docDetailListContentContainerStyle}
        ItemSeparatorComponent={() => <DividerHorizontal width={"80%"} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //borderColor: "white",
    width: "70%",
  },
  hiveTitle: {
    //color: "white",
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  item: {
    //backgroundColor: "#38343C",
    padding: 15,
    marginVertical: 0.5,
    marginHorizontal: 0,
  },
  title: {
    //color: "white",
  },
  docButton: {
    margin: 20,
    padding: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
