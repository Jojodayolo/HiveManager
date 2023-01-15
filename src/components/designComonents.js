import { View, StyleSheet } from "react-native";

export const DividerVertical = () => <View style={styles.dividerVertical} />;
export const DividerHorizontal = () => (
  <View style={styles.dividerHorizontal} />
);

const styles = StyleSheet.create({
  dividerVertical: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: "rgb(142, 142, 147)",
  },
  dividerHorizontal: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgb(209, 209, 214)",
  },
});
