import React from "react";
import { StyleSheet, Image, Button, TextInput, View, Text } from "react-native";
import { defaultStyles } from "./Styles";
import { auth, SignIn, SignUp, getLocations } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export const TitleScreen = () => {
  const [eMail, onEMail] = React.useState("max@mustermann.com");
  const [password, onPassword] = React.useState("admin123");
  const navigation = useNavigation();
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
      <View>
        <Button
          title="Login"
          onPress={() => {
            SignIn(eMail, password);
            navigation.navigate("LocationList");
          }}
        />
        <Button
          title="Create Account"
          onPress={() => navigation.navigate("CreateUserScreen")}
        />
      </View>
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
