import { StyleSheet } from "react-native";
/**
 * Default style elements.
 */
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

/**
 * Style elements for the different form views. 
 */
const formStyles = StyleSheet.create({
  scrollView: {

  },
  scrollViewGroup: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 5,
    //bottom border
    borderBottomWidth: 1,
    borderColor: "rgb(142, 142, 147)",
    padding: 15,
  },
  inputLabel: {
    textAlign: "right",
    color: "black",
    width: "30%",
    padding: 10,
  },
  outputLabel: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: "65%",
    marginRight: "10%",
    backgroundColor: "white",
    color: "black",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
    marginRight: "10%",
  },
  bigInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
    width: "65%",
    marginRight: "10%",
  },
  boldInputLabel: {
    textAlign: "right",
    padding: 0,
    fontWeight: "bold",
  }
});
export { defaultStyles };
export { formStyles };
