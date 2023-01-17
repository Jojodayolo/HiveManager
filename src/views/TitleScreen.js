import { StyleSheet, Image, Button, TextInput, View, Text } from "react-native";
import { defaultStyles } from "./Styles";
import React, { useEffect } from "react";

export const TitleScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Hive Manager",
    });
  });
  
  return (
    <View
      style={[
        defaultStyles.container,
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Image
        style={styles.img}
        source={require("../assets/imgs/LogoPNG.png")}
      />

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-Mail</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput style={[styles.input]} />
      </View>
      
      <Button
        title="Login"
        onPress={() => navigation.navigate("LocationList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: 300,   
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
  },
  inputLabel: {
    textAlign: "right",
    width: "25%",
    padding: 10,
    fontWeight: "bold",
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    width: "70%",
  },
});
