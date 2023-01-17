import React, { useEffect } from "react";
import { Button, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { formStyles } from "../views/Styles";

export const DocumentationViewer = ({ route }) => {
  //fetch current document
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
    <ScrollView style={formStyles.scrollView}>
      <View style={formStyles.scrollViewGroup}>
        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Volksstärke</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].population}</Text>
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Honigwaben (kg)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].honeycombs}</Text>
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Königin gesehen K / Stifte S</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].queen}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Baurahmen +/- (geschnitten)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].frame}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Weiselzellen</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].cells}</Text>
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Gefüttert (ml/kg)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].fed}</Text>
        </View>
        
        <View
          style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={formStyles.inputLabel}>Notizen</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].notes}</Text>
        </View>
      </View>

      <View style={formStyles.scrollViewGroup}>      
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
        
        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Bezeichnung des Arzneimittls (+ Charge):</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.name}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Menge pro Bienenvolk (ml)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.amount}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Name und Anschrift des Lieferanten</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.supplier}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Belegnummer</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.receiptnumber}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Standort der Bienenvölker (Flurnummer oder Bezeichnung)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.colonyLocation}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Nummern der Bienenvölker</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.colonyNumber}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Ggf. Name und Anschrift des Tierarztes</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.vetInfo}</Text>
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Wartezeit (Laut Packungsbeilage)</Text>
          <Text style={formStyles.outputLabel}>{currentDocument[0].drugData.waitingPeriod}</Text>
        </View>

        <View
          style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={formStyles.inputLabel}>Behandlungsdauer</Text>
          <Text style={formStyles.outputLabel}>
            {currentDocument[0].drugData.treatmentDuration}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

