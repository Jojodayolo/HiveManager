import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeLocation } from "../redux/actions";

export const LocationTile = (props) => {
  const navigation = useNavigation();
  let location = props.location;
  const dispatch = useDispatch();

  console.log(location);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("LocationShow", { name: location.name })
      }
      onLongPress={() => {
        dispatch(removeLocation({ payload: location.uuid }));
      }}
    >
      <View style={styles.container}>
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
