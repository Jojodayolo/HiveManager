import React, { useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, createDoc } from "../redux/actions";
import Store from "../redux/store";
import { formStyles } from "../views/Styles";

export const DocumentationForm = ({ route }) => {
  const uuid = route.params.uuid;
  console.log(route);

  //Various Variables of a documentation
  const [population, onChangePopulation] = React.useState("");
  const [honeycombs, onChangeHoneycombs] = React.useState("");
  const [queen, onChangeQueen] = React.useState("");
  const [frame, onChangeFrame] = React.useState("");
  const [cells, onChangeCells] = React.useState("");
  const [fed, onChangeFed] = React.useState("");
  const [notes, onChangeNotes] = React.useState("");
  
  const [drugName, onChangeDrugName] = React.useState("");
  const [drugAmount, onChangeDrugAmount] = React.useState("");
  const [drugSupplier, onChangeDrugSupplier] = React.useState("");
  const [drugReceiptnumber, onChangeDrugReceiptnumber] = React.useState("");
  const [drugColonyLocation, onChangeDrugColonyLocation] = React.useState("");
  const [drugColonyNumber, onChangeDrugColonyNumber] = React.useState("");
  const [drugVetInfo, onChangeDrugVetInfo] = React.useState("");
  const [drugWaitingperiod, onChangeDrugWaitingperiod] = React.useState("");
  const [drugTreatmentDuration, onChangeDrugTreatmentDuration] = React.useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  /*
   * onDone() 
   * Creates a new document with the entered values for the current hive .
   */
  const onDone = () => {
    dispatch(
      createDoc({
        population: population,
        honeycombs: honeycombs,
        queen: queen,
        frame: frame,
        cells: cells,
        fed: fed,
        notes: notes,
        drugData: {
          name: drugName,
          amount: drugAmount,
          supplier: drugSupplier,
          receiptnumber: drugReceiptnumber,
          colonyLocation: drugColonyLocation,
          colonyNumber: drugColonyNumber,
          vetInfo: drugVetInfo,
          waitingPeriod: drugWaitingperiod,
          treatmentDuration: drugTreatmentDuration,
        },
      })
    );
    const state = Store.store.getState();
    console.log(uuid);
    console.log(state.documentations.newestDocID);
    dispatch(
      addDoc({ hiveUuid: uuid, docUuid: state.documentations.newestDocID })
    );
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => (
        <Button title="Abbrechen" onPress={navigation.goBack} />
      ),
      headerTitle: "Eintrag hinzufügen",
    });
  });


  return (
    <ScrollView style={formStyles.scrollView}>
      <View style={formStyles.scrollViewGroup}>
        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Volksstärke (1-4)</Text>
          <TextInput
            style={formStyles.input}
            maxLength={1}
            onChangeText={onChangePopulation}
            value={population || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Honigwaben (kg)</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeHoneycombs}
            value={honeycombs || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Königin gesehen K / Stifte S</Text>
            <TextInput
            style={formStyles.input}
            maxLength={1}
            onChangeText={onChangeQueen}
            value={queen || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Baurahmen +/- (geschnitten)</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeFrame}
            value={frame || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Weiselzellen</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeCells}
            value={cells || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Gefüttert (ml/kg)</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeFed}
            value={fed || ""}
          />
        </View>

        <View
          style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={formStyles.inputLabel}>Notizen</Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeNotes}
            value={notes || ""}
          />
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
          <Text style={formStyles.inputLabel}>
            Bezeichnung des Arzneimittls (+ Charge)
          </Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeDrugName}
            value={drugName || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
            <Text style={formStyles.inputLabel}>Menge pro Bienenvolk (ml)</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeDrugAmount}
            value={drugAmount || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>
            Name und Anschrift des Lieferanten
          </Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeDrugSupplier}
            value={drugSupplier || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Belegnummer</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeDrugReceiptnumber}
            value={drugReceiptnumber || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>
            Standort der Bienenvölker (Flurnummer oder Bezeichnung)
          </Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeDrugColonyLocation}
            value={drugColonyLocation || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>Nummern der Bienenvölker</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeDrugColonyNumber}
            value={drugColonyNumber || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>
            Ggf. Name und Anschrift des Tierarztes:
          </Text>
          <TextInput
            style={formStyles.bigInput}
            multiline={true}
            onChangeText={onChangeDrugVetInfo}
            value={drugVetInfo || ""}
          />
        </View>

        <View style={formStyles.inputBox}>
          <Text style={formStyles.inputLabel}>
            Wartezeit (Laut Packungsbeilage)
          </Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeDrugWaitingperiod}
            value={drugWaitingperiod || ""}
          />
        </View>

        <View
          style={[formStyles.inputBox, { borderBottomWidth: 0, paddingBottom: 0 }]}
        >
          <Text style={formStyles.inputLabel}>Behandlungsdauer</Text>
          <TextInput
            style={formStyles.input}
            onChangeText={onChangeDrugTreatmentDuration}
            value={drugTreatmentDuration || ""}
          />
        </View>
      </View>
    </ScrollView>
  );
};