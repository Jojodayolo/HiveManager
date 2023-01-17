import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector, useState } from "react-redux";
import { addHive, createHive } from "../redux/actions";
import Store from "../redux/store";

export const HiveForm = ({ route }) => {
  const [hiveName, onChangeText] = React.useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const uuid = route.params.uuid;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => (
        <Button title="Abbrechen" onPress={navigation.goBack} />
      ),
      headerTitle: "Bienenstock hinzufügen",
    });
  });

  const onDone = () => {
    dispatch(createHive({ name: hiveName }));
    const state = Store.store.getState();
    dispatch(addHive({ locUuid: uuid, hiveUuid: state.hives.newestHiveID }));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.scrollViewGroup}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={hiveName || ""}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    width: "75%",
    marginRight: "10%",
  },
  inputLabel: {
    textAlign: "center",
    width: "25%",
    padding: 10,
  },
  scrollViewGroup: {
    flexDirection: "row",

    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "left",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
