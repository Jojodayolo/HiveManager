import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
  container: {
    //backgroundColor: colors.colordarkgray5,
  },
  navigationHeader: {
    //backgroundColor: colors.colordarkgray6,
  },
  hiveList: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  hiveListItem: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  docDetailListContentContainerStyle: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    height: "90%",
    overflow: "hidden",
  },
  docDetailListStyle: {
    margin: 20,
  },
  documentationItem: {
    padding: 5,
    borderRadius: 10,
  },
  locationList: {},
  locationTile: {
    borderWidth: 0,
    borderRadius: 10,
    width: 150,
    height: 175,
    flexDirection: "column",
    backgroundColor: "white",
    //padding: 10,
  },
});
export { defaultStyles };
