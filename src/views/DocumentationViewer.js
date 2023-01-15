import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const DocumentationViewer = ({ route }) => {
  const documentations = useSelector(
    (state) => state.documentations.documentations
  );
  const uuid = route.params.uuid;
  const currentDocument = documentations.filter((loc) => loc.uuid === uuid);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Bearbeiten" onPress={() => navigation.navigate("")} />
      ),
    });
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.scrollViewGroup}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Volksstärke</Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].population}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Honigwaben</Text>
            <Text style={styles.inputLabelBold}>(kg)</Text>
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].honeycombs}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Königin gesehen </Text>
            <Text style={styles.inputLabelBold}> K / Sifte S</Text>
          </Text>
          <Text style={styles.outputLabel}>{currentDocument[0].queen}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Baurahmen +/- (geschnitten)</Text>
          <Text style={styles.outputLabel}>{currentDocument[0].frame}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Weiselzellen</Text>
          <Text style={styles.outputLabel}>{currentDocument[0].cells}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Gefüttert </Text>
            <Text style={styles.inputLabelBold}>(ml/kg)</Text>
          </Text>
          <Text style={styles.outputLabel}>{currentDocument[0].fed}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Notizen</Text>
          <Text style={styles.outputLabel}>{currentDocument[0].notes}</Text>
        </View>
      </View>

      <View style={styles.scrollViewGroup}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Bezeichnung des Arzneimittls (+ Charge):
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.name}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Menge pro Bienenvolk </Text>
            <Text style={styles.inputLabelBold}>(ml)</Text>
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.amount}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Name und Anschrift des Lieferanten
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.supplier}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Belegnummer</Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.receiptnumber}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Standort der Bienenvölker (Flurnummer oder Bezeichnung)
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.colonyLocation}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Nummern der Bienenvölker</Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.colonyNumber}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Ggf. Name und Anschrift des Tierarztes
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.vetInfo}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Wartezeit (Laut Packungsbeilage)
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.waitingPeriod}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Behandlungsdauer</Text>
          <Text style={styles.outputLabel}>
            {currentDocument[0].drugData.treatmentDuration}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    textAlign: "left",
    width: "25%",
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
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgb(142, 142, 147)",
    padding: 15,
  },
  inputLabelBold: {
    textAlign: "left",
    width: "25%",
    padding: 0,
    fontWeight: "bold",
  },
  scrollView: {},
  scrollViewGroup: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "rgb(229, 229, 234)",
  },
});
