import { StyleSheet, Image, Button, Text, View } from "react-native";
import { defaultStyles } from "./Styles";

export const TitleScreen = ({ navigation }) => {
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
      <Text style={styles.title}>Hive Manager</Text>
      <Image
        style={styles.img}
        source={require("../assets/imgs/tmpLogo.jpg")}
      />
      <Button
        title="Start"
        onPress={() => navigation.navigate("LocationList")}
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
});
