import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import DeleteMenu from "../components/DeleteMenu";
import { defaultStyles } from "../views/Styles";

export const LocationTile = (props) => {
  const navigation = useNavigation();
  let location = props.location;
  return (
    <TouchableOpacity
      style={[defaultStyles.locationTile]}
      onPress={() =>
        navigation.navigate("LocationShow", { location: location })
      }
    >
      <View flex={1} style={{ flex: 1 }}>
        <DeleteMenu style={styles.menu} />
      </View>
      <View flex={2} style={styles.content}>
        <Image
          source={require("../assets/imgs/Bauernhof.png")}
          style={styles.img}
        />
        <Text style={styles.tileText}>{location.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderRadius: 10,
    width: 150,
    height: 175,
    flexDirection: "column",
    backgroundColor: "rgb(242, 242, 247)",
    padding: 10,
  },
  menu: {
    height: "3%",
  },
  content: {
    justifyContent: "center",
    top: -20,
  },
  popup: {
    borderRadius: 20,
    fontSize: 20,
  },
  img: {
    alignSelf: "center",
    width: 100,
    height: 100,
    resizeMode: "contain",
    overflow: "hidden",
  },
  tileText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    padding: 0,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
