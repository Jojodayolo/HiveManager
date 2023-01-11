import React, { useEffect } from "react";
import { DarkTheme } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { createLocation, getFirst } from "../redux/actions";

export const LocationForm = () => {
  const [locationName, onChangeLocationName] = React.useState();
  const [locationAddress, onChangeAddress] = React.useState();
  const [locationNotes, onChangeNotes] = React.useState();
  const [locationPhoto, onChangePhoto] = React.useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onDone = () => {
    dispatch(
      createLocation({
        name: locationName,
        address: locationAddress,
        notes: locationNotes,
      })
    );
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => (
        <Button title="Abbrechen" onPress={navigation.goBack} />
      ),
      headerTitle: "Standort hinzufügen",
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLocationName}
          value={locationName || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Addresse:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={locationAddress || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Notizen:</Text>
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeNotes}
          value={locationNotes || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Bild hinzufügen:</Text>

        <Button title="Foto hinzufügen" onPress={onChangePhoto} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
    marginRight: "10%",
  },
  bigInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
    marginRight: "10%",
    textAlignVertical: "top",
  },
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
  },
  inputLabel: {
    textAlign: "right",
    color: "white",
    width: "25%",
    padding: 10,
  },
  scrollView: {},
});
