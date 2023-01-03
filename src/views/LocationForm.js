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

export const LocationForm = () => {
  const [locationName, onChangeLocationName] = React.useState();
  const [address, onChangeAddress] = React.useState();
  const [notes, onChangeNotes] = React.useState();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" />,
      headerLeft: () => <Button title="Abbrechen" onPress={navigation.goBack} />,
      headerTitle: "Standort hinzufügen",
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLocationName}
          value={locationName}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Addresse</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Notizen</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNotes}
          value={notes}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Foto</Text>
        
        <Button title="Kamera öffnen"></Button>
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
    width: "25%",
    padding: 10,
  },
  scrollView: {
  },
});
