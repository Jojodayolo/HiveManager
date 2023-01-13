import React, { useEffect } from "react";
import { DarkTheme } from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropdownComponent from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, createDoc } from "../redux/actions";
import Store from "../redux/store";

export const DocumentationForm = ({ route }) => {
  const uuid = route.params.uuid;
  console.log(route);
  const [population, onChangePopulation] = React.useState('');
  const [honeycombs, onChangeHoneycombs] = React.useState('');
  const [queen, onChangeQueen] = React.useState('');
  const [frame, onChangeFrame] = React.useState('');
  const [cells, onChangeCells] = React.useState('');
  const [fed, onChangeFed] = React.useState('');
  const [notes, onChangeNotes] = React.useState('');

  const [drugName, onChangeDrugName] = React.useState('');
  const [drugAmount, onChangeDrugAmount] = React.useState('');
  const [drugSupplier, onChangeDrugSupplier] = React.useState('');
  const [drugReceiptnumber, onChangeDrugReceiptnumber] = React.useState('');
  const [drugColonyLocation, onChangeDrugColonyLocation] = React.useState('');
  const [drugColonyNumber, onChangeDrugColonyNumber] = React.useState('');
  const [drugVetInfo, onChangeDrugVetInfo] = React.useState('');
  const [drugWaitingperiod, onChangeDrugWaitingperiod] = React.useState('');
  const [drugTreatmentDuration, onChangeDrugTreatmentDuration] = React.useState('');
  
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onDone = () => {
    dispatch(
      createDoc({
        population:population,
        honeycombs:honeycombs,
        queen:queen,
        frame:frame,
        cells:cells,
        fed:fed,
        notes:notes,
        drugData:{
          name:drugName,
          amount:drugAmount,
          supplier:drugSupplier,
          receiptnumber:drugReceiptnumber,
          colonyLocation:drugColonyLocation,
          colonyNumber:drugColonyNumber,
          vetInfo:drugVetInfo,
          waitingPeriod:drugWaitingperiod,
          treatmentDuration:drugTreatmentDuration,
        }
    }));
    const state = Store.store.getState();
    console.log(uuid);
    console.log(state.documentations.newestDocID);
    dispatch(
      addDoc({hiveUuid: uuid, docUuid: state.documentations.newestDocID})
    );
    navigation.goBack();
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Fertig" onPress={onDone} />,
      headerLeft: () => <Button title="Abbrechen" onPress={navigation.goBack} />,
      headerTitle: "Eintrag hinzufügen",
    });
  });
  
  return (<View>
    <ScrollView style={styles.scrollView}>
      {/*Standard Inputs*/}
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Volksstärke:</Text>
        <DropdownComponent/>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Honigwaben (<b>kg</b>):</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeHoneycombs}
          value={honeycombs || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Königin gesehen <b>K</b> / Stifte <b>S:</b></Text>
        <DropdownComponent/>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Baurahmen +/- (geschnitten):</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFrame}
          value={frame || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Weiselzellen:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCells}
          value={cells || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Gefüttert (<b>ml/kg</b>):</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFed}
          value={fed || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Notizen:</Text>
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeNotes}
          value={notes || ''}
        />
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
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeDrugName}
          value={drugName || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Menge pro Bienenvolk (<b>ml</b>):</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrugAmount}
          value={drugAmount || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Name und Anschrift des Lieferanten:</Text>
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeDrugSupplier}
          value={drugSupplier || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Belegnummer:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrugReceiptnumber}
          value={drugReceiptnumber || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Standort der Bienenvölker (Flurnummer oder Bezeichnung):</Text>
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeDrugColonyLocation}
          value={drugColonyLocation || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Nummern der Bienenvölker:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrugColonyNumber}
          value={drugColonyNumber || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Ggf. Name und Anschrift des Tierarztes:</Text>
        <TextInput
          style={styles.bigInput}
          multiline={true}
          onChangeText={onChangeDrugVetInfo}
          value={drugVetInfo || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Wartezeit (Laut Packungsbeilage):</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrugWaitingperiod}
          value={drugWaitingperiod || ''}
        />
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Behandlungsdauer:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrugTreatmentDuration}
          value={drugTreatmentDuration || ''}
        />
      </View>

      
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  inputBox: {
    flexDirection: "row",
    alignSelf: "left",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
  },
  inputLabel: {
    textAlign: "right",
    color: "white",
    width: "25%",
    padding: 10,
  },
  scrollView: {
  },
});
