import { StyleSheet, View, Button, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";



export const LocationDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={{color:'white'}}>Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    borderColor: "white",
    width: '70%'
  },
});
