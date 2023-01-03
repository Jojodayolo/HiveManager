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

export const HiveForm = () => {
  const [text, onChangeText] = React.useState("Hivename");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" />,
      headerLeft: () => <Button title="Abbrechen" onPress={navigation.goBack} />,
      headerTitle: "Bienenstock hinzufügen",
    });
  });

  return (
    <ScrollView>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
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
