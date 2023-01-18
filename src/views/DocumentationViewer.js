import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const DocumentationViewer = ({ route }) => {
  const currentDocument = route.params.doc;
  console.log(currentDocument);
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
          <Text style={styles.outputLabel}>{currentDocument.population}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Honigwaben</Text>
            <Text style={styles.inputLabelBold}>(kg)</Text>
          </Text>
          <Text style={styles.outputLabel}>{currentDocument.honeycombs}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Königin gesehen </Text>
            <Text style={styles.inputLabelBold}> K / Sifte S</Text>
          </Text>
          <Text style={styles.outputLabel}>{currentDocument.queen}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Baurahmen +/- (geschnitten)</Text>
          <Text style={styles.outputLabel}>{currentDocument.frame}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Weiselzellen</Text>
          <Text style={styles.outputLabel}>{currentDocument.cells}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Gefüttert </Text>
            <Text style={styles.inputLabelBold}>(ml/kg)</Text>
          </Text>
          <Text style={styles.outputLabel}>{currentDocument.fed}</Text>
        </View>
        <View
          style={[styles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={styles.inputLabel}>Notizen</Text>
          <Text style={styles.outputLabel}>{currentDocument.notes}</Text>
        </View>
      </View>

      <View style={styles.scrollViewGroup}>
        <View
          style={{
            flex: 1,
            height: 1,
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <View>
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Anwendung von Arzneimitteln
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            //backgroundColor: "white",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Bezeichnung des Arzneimittls (+ Charge):
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.name}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            <Text style={styles.inputLabel}>Menge pro Bienenvolk </Text>
            <Text style={styles.inputLabelBold}>(ml)</Text>
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.amount}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Name und Anschrift des Lieferanten
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.supplier}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Belegnummer</Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.receiptnumber}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Standort der Bienenvölker (Flurnummer oder Bezeichnung)
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.colonyLocation}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Nummern der Bienenvölker</Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.colonyNumber}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Ggf. Name und Anschrift des Tierarztes
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.vetInfo}
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>
            Wartezeit (Laut Packungsbeilage)
          </Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.waitingPeriod}
          </Text>
        </View>
        <View
          style={[styles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={styles.inputLabel}>Behandlungsdauer</Text>
          <Text style={styles.outputLabel}>
            {currentDocument.drugData.treatmentDuration}
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
    backgroundColor: "white",
  },
});
