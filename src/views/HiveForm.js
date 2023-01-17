import React, { useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector, useState } from "react-redux";
import { addHive, createHive } from "../redux/actions";
import Store from "../redux/store";
import { formStyles } from "../views/Styles";


export const HiveForm = ({ route }) => {

  //Variable of a Hive
  const [hiveName, onChangeText] = React.useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const uuid = route.params.uuid;
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => (
        <Button title="Abbrechen" onPress={navigation.goBack} />
      ),
      headerTitle: "Bienenstock hinzufügen",
    });
  });

  /*
   * onDone() 
   * Creates a new hive with the entered values for the current location. 
   */
  const onDone = () => {
    dispatch(createHive({name:hiveName}));
    const state = Store.store.getState();
    dispatch(
      addHive({locUuid: uuid, hiveUuid: state.hives.newestHiveID})
    );
    navigation.goBack();
  };

  return (
    <ScrollView style={formStyles.scrollView}>
      <View style={formStyles.scrollViewGroup}>
        <View style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}>
          <Text style={formStyles.inputLabel}>Name</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeText}
            value={hiveName || ""}
          />
        </View>
      </View>
    </ScrollView>
  );
};