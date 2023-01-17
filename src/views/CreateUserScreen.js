import React from "react";
import { StyleSheet, Image, Button, TextInput, View, Text } from "react-native";
import { defaultStyles } from "./Styles";
import { auth, SignIn, SignUp } from "../../firebaseConfig";

export const CreateUserScreen = ({ navigation }) => {
  const [eMail, onEMail] = React.useState("max@mustermann.com");
  const [password, onPassword] = React.useState("admin123");
  const [firstName, onFirstName] = React.useState("Max");
  const [surName, onSurName] = React.useState("Mustermann");

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
        <Text style={styles.inputLabel}>Vorname</Text>
        <TextInput
          style={styles.input}
          onChangeText={onFirstName}
          value={firstName || ""}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Nachname</Text>
        <TextInput
          style={styles.input}
          onChangeText={onSurName}
          value={surName || ""}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={onEMail}
          value={eMail || ""}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={onPassword}
          value={password || ""}
        />
      </View>
      <Button
        title="Login"
        onPress={() => SignUp(eMail, password, firstName, surName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
  img: {
    width: 200,
    height: 200,
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
