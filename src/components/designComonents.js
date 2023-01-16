import React from "react";
import { View, StyleSheet } from "react-native";

export const DividerVertical = () => <View style={styles.dividerVertical} />;
export const DividerHorizontal = () => (
  <View style={styles.dividerHorizontal} />
);

const styles = StyleSheet.create({
  dividerVertical: {
    width: 0.3,
    backgroundColor: "rgb(142, 142, 147)",
  },
  dividerHorizontal: {
    height: 0.3,
    backgroundColor: "rgb(209, 209, 214)",
  },
});
