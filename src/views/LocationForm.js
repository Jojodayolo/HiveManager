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

export const LocationCreator = () => {
  const [text, onChangeText] = React.useState();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Save" />,
      headerLeft: () => <Button title="Cancel" onPress={navigation.goBack} />,
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Location Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Notes</Text>
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
  scrollView: {},
});
