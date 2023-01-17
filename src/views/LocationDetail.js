import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { defaultStyles } from "./Styles";
import { DividerHorizontal } from "../components/designComonents";

// needs a style rework text is alwys black
const Item = ({ item, onPress }) => (
  <TouchableOpacity style={[defaultStyles.documentationItem]} onPress={onPress}>
    <Text style={styles.name}>
      {item.date.getDate() +
        "." +
        (item.date.getMonth() + 1) +
        "." +
        item.date.getFullYear() +
        " " +
        item.date.getHours() +
        ":" +
        item.date.getMinutes()}
    </Text>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

export const LocationDetail = (props) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  //Item that gets Highlighted when selected
  const renderItem = ({ item }) => {
    const onDocSelected = () => {
      setSelectedId(item.uuid);
      navigation.navigate("DocumentationViewer", { uuid: item.uuid });
    };
    return <Item item={item} onPress={onDocSelected} />;
  };

  //Get the selected Hive
  const selectedHive = useSelector((state) =>
    state.hives.hives.filter((hive) => hive.uuid === props.uuid)
  );

  //Filter the documentations for the ones that belong to the hive
  const documentations = useSelector((state) => state.documentations);
  var localDocs;
  try {
    localDocs = documentations.documentations.filter((doc) =>
      selectedHive[0].docIDs.includes(doc.uuid)
    );
  } catch (error) {
    localDocs = [];
  }

  //dont display a list if there are no docs or display nothing if no hive is selected(second should only happen if a location has no hives)
  if (props.uuid === null || selectedHive.length === 0) {
    return <View style={defaultStyles.docDetailList} />;
  } else if (localDocs.length === 0) {
    console.log(selectedHive[0].name);
    return (
      <View style={styles.container}>
        <Text flex={1} style={styles.hiveTitle}>
          {selectedHive[0].name}
        </Text>
        <Button
          flex={2}
          title="Dokumentationen Hinzufügen"
          style={styles.docButton}
          onPress={() =>
            navigation.navigate("DocumentationForm", {
              uuid: selectedHive[0].uuid,
            })
          }
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
      <Text style={styles.hiveTitle}>{selectedHive[0].name}</Text>
      <Button
        title="Dokumentationen Hinzufügen"
        style={styles.docButton}
        onPress={() =>
          navigation.navigate("DocumentationForm", {
            uuid: selectedHive[0].uuid,
          })
        }
      />
      <FlatList // The list of the Documentation for the selected hive
        style={defaultStyles.docDetailListStyle}
        data={localDocs}
        renderItem={renderItem}
        keyExtractor={(item) => item.uuid}
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
