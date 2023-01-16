import React, { useEffect } from "react";
import { DarkTheme } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { createLocation, getFirst } from "../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";
import LocationCamera from "./LocationCamera";
import CameraButton from "../components/CameraButton";

export const LocationForm = () => {
  const [locationName, onChangeLocationName] = React.useState("");
  const [locationAddress, onChangeAddress] = React.useState("");
  const [locationNotes, onChangeNotes] = React.useState("");
  const [locationPhoto, onChangePhoto] = React.useState("");

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
      <View style={styles.scrollViewGroup}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLocationName}
            value={locationName || ""}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Addresse:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={locationAddress || ""}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Notizen:</Text>
          <TextInput
            style={styles.bigInput}
            multiline={true}
            onChangeText={onChangeNotes}
            value={locationNotes || ""}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Bild hinzufügen:</Text>

          <CameraButton
            title={"openCamera"}
            icon="camera"
            onPress={() => navigation.navigate("LocationCamera")}
          />
        </View>
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
    width: "65%",
    marginRight: "10%",
  },
  bigInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
    marginRight: "10%",
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
    width: "25%",
    padding: 10,
  },
  scrollView: {},
  scrollViewGroup: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
/*() => navigation.navigate("LocationCamera")
<CameraButton title={'openCamera'} icon="camera" />*/
