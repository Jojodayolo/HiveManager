import React, { useEffect } from "react";
import { DarkTheme } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const DocumentationViewer = ({route}) => {
  const documentations = useSelector((state) => state.documentations.documentations);
  const uuid = route.params.uuid;
  console.log(documentations);
  const currentDocument = documentations.filter((loc) => loc.uuid === uuid);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Bearbeiten"
          onPress={() => navigation.navigate("")}
        />
      ),
      //headerTitle: "",
    });
  });

  return (
      <ScrollView style={styles.scrollView}>
        {/*Standard Inputs*/}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Volksstärke:</Text>
          <Text style={styles.outputLabel}>{currentDocument[0].population}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Honigwaben (<b>kg</b>):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Königin gesehen <b>K</b> / Stifte <b>S:</b></Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Baurahmen +/- (geschnitten):</Text>
          <Text style={styles.outputLabel}>{currentDocument[0].frame}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Weiselzellen:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Gefüttert (<b>ml/kg</b>):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Notizen:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>

        {/*Standoff*/}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white', marginLeft: '5%', marginRight: '5%'}} />
            <View>
            <Text style={{width: 190, textAlign: 'center', color: 'white'}}>Anwendung von Arzneimitteln</Text>
            </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'white', marginLeft: '5%', marginRight: '5%'}} />
        </View>

        {/*Drug inputs*/}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Bezeichnung des Arzneimittls (+ Charge):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Menge pro Bienenvolk (<b>ml</b>):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Name und Anschrift des Lieferanten:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Belegnummer:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Standort der Bienenvölker (Flurnummer oder Bezeichnung):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Nummern der Bienenvölker:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Ggf. Name und Anschrift des Tierarztes:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Wartezeit (Laut Packungsbeilage):</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Behandlungsdauer:</Text>
          <Text style={styles.outputLabel}></Text>
        </View>
      </ScrollView>
    );
} 

const styles = StyleSheet.create({
  inputLabel: {
    textAlign: "right",
    color: "white",
    width: "25%",
    padding: 10,
  },
  outputLabel:{
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
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
  },
  scrollView: {
  },
});