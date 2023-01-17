/**
 * LocationForm.js
 * 
 * View relevant for creating a new Location.
 */
import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { createLocation, getFirst } from "../redux/actions";
import CameraButton from "../components/CameraButton";
import { formStyles } from "../views/Styles";


export const LocationForm = () => {

  //Various Variables of a location
  const [locationName, onChangeLocationName] = React.useState("");
  const [locationAddress, onChangeAddress] = React.useState("");
  const [locationNotes, onChangeNotes] = React.useState("");
  const [locationPhoto, onChangePhoto] = React.useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * useEffect()
   * Function used to add buttons to the header and set the header title.
   */
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => (
        <Button title="Abbrechen" onPress={navigation.goBack} />
      ),
      headerTitle: "Standort hinzufügen",
    });
  });

  /**
   * onDone() 
   * Creates a new location with the entered values.
   */
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

  return (
    <ScrollView style={formStyles.scrollView}>
      <View style={formStyles.scrollViewGroup}>
        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Name:</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeLocationName}
            value={locationName || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Addresse:</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeAddress}
            value={locationAddress || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Notizen:</Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeNotes}
            value={locationNotes || ""}
          />
        </View>

        <View style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <Text style={formStyles.inputLabel}>Bild hinzufügen:</Text>
          <CameraButton
            title={""}
            icon="camera"
            onPress={() => navigation.navigate("LocationCamera")}
          />
        </View>
      </View>
    </ScrollView>
  );
};