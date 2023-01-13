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
    dispatch(createHive({name:hiveName}));
    const state = Store.store.getState();
    dispatch(
      addHive({locUuid: uuid, hiveUuid: state.hives.newestHiveID})
    );
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.inputBox}>
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
    width: "40%",
    marginRight: "10%",
  },
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputLabel: {
    textAlign: "center",
    color: "white",
    width: "30%",
    padding: 10,
  },
});
