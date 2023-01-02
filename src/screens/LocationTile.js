import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const LocationTile = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("LocationViewer", { name: props.name })
      }
    >
      <View style={styles.container}>
        <Image source={require("./Bauernhof.png")} style={styles.img} />
        <Text style={styles.tileText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    justifyContent: "center",
    borderColor: "#38343C",
    backgroundColor: "#38343C",
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
    height: 175,
  },
  img: {
    alignSelf: "center",
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  tileText: {
    textAlign: "left",
    textAlignVertical: "center",
    color: "white",
    fontSize: 18,
    padding: 10,
  },
});
