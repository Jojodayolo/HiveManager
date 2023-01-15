import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Entypo } from "@expo/vector-icons";
import { removeLocation } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Divider = () => <View style={styles.divider} />;

const DeleteMenu = () => {
  const dispatch = useDispatch();

  return (
    <Menu style={[styles.container]}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={25} color="black" />
      </MenuTrigger>

      <MenuOptions
        customStyles={{
          optionsContainer: {
            borderRadius: 10,
            overflow: "hidden",
          },
        }}
      >
        <MenuOption text="Bearbeiten" />
        <Divider />
        <MenuOption text="Löschen" customStyles={styles.deleteOption} />
      </MenuOptions>
    </Menu>
  );
};

export default DeleteMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    padding: 10,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgb(199, 199, 204)",
  },
  deleteOption: {
    paddingLeft: 20,
    optionWrapper: {
      backgroundColor: "rgb(255, 59, 48)",
    },
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
