import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import uuid from "react-uuid";

const locationInitialState = [
  {
    uuid: "d96b98a2-517f-999c-20f1-0ab32e561d18",
    name: "TestNameLoc",
    address: "Home",
    notes: "Dingsbums",
    hiveIDs: ["4538b7d7-11f0-3e71-4ec9-9a0765c8ef6d"],
  },
  {
    uuid: "691aeaf6-525f-11ee-9de2-89d3bccd3202",
    name: "TestNameLoc2",
    address: "Home2",
    notes: "Dingsbums2",
    hiveIDs: [],
  },
];

/*const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    colorTheme: "light",
  },
  reducers: {
    setThemeToDark: () => {
      return (state.colorTheme = "dark");
    },
    setThemeToLight: () => {
      return (state.colorTheme = "light");
    },
  },
});*/

const locationsSlice = createSlice({
  name: "locations",
  initialState: locationInitialState,
  reducers: {
    createLocation: (state, action) => {
      /*TODO:
       * - chech double names
       * - create uuid
       * - check if uuid exists
       */

      state.push({
        uuid: uuid(),
        name: action.payload.name,
        address: action.payload.address,
        notes: action.payload.notes,
        hiveIDs: [],
      });
    },
    removeLocation: (state, action) => {
      //let serializedData = JSON.parse(state.locations);
      let newLocs = state.filter(
        (location) => location.uuid !== action.payload.payload
      );

      state = Date.now();
      return newLocs;
    },
    getFirst: (state) => {
      return state.locations[0];
    },
    addHive: (state, action) => {
      state.forEach((loc) => {
        if (loc.uuid === action.payload.locUuid) {
          loc.hiveIDs.push(action.payload.hiveUuid);
        }
      });
    },
  },
});

const hiveSlice = createSlice({
  name: "hives",
  initialState: {
    hives: [
      {
        uuid: "4538b7d7-11f0-3e71-4ec9-9a0765c8ef6d",
        name: "",
        docIDs: ["1"],
      },
    ],
    newestHiveID: "",
  },
  reducers: {
    createHive: (state, action) => {
      const newUuid = uuid();

      state.hives.push({
        uuid: newUuid,
        name: action.payload.name,
        docIDs: [],
      });
      state.newestHiveID = newUuid;
    },
    addDoc: (state, action) => {
      state.hives.forEach((hive) => {
        if (hive.uuid === action.payload.hiveUuid) {
          hive.docIDs.push(action.payload.docUuid);
        }
      });
    },
  },
});

const documentationSlice = createSlice({
  name: "documentations",
  initialState: {
    documentations: [
      {
        uuid: "1",
        date: new Date(),
        population: "",
        honeycombs: "",
        queen: "",
        frame: "",
        cells: "",
        fed: "",
        notes: "",
        drugData: {
          name: "",
          amount: "",
          supplier: "",
          receiptnumber: "",
          colonyLocation: "",
          colonyNumber: "",
          vetInfo: "",
          waitingPeriod: "",
          treatmentDuration: "",
        },
      },
    ],
    newestDocID: "",
  },
  reducers: {
    createDoc: (state, action) => {
      const newUuid = uuid();

      state.documentations.push({
        uuid: newUuid,
        date: new Date(),
        population: action.payload.population,
        honeycombs: action.payload.honeycombs,
        queen: action.payload.queen,
        frame: action.payload.frame,
        cells: action.payload.cells,
        fed: action.payload.fed,
        notes: action.payload.notes,
        drugData: {
          name: action.payload.drugData.name,
          amount: action.payload.drugData.amount,
          supplier: action.payload.drugData.supplier,
          receiptnumber: action.payload.drugData.receiptnumber,
          colonyLocation: action.payload.drugData.colonyLocation,
          colonyNumber: action.payload.drugData.colonyNumber,
          vetInfo: action.payload.drugData.vetInfo,
          waitingPeriod: action.payload.drugData.waitingPeriod,
          treatmentDuration: action.payload.drugData.treatmentDuration,
        },
      });
      state.newestDocID = newUuid;
    },
  },
});

export const { createLocation, removeLocation, getFirst, addHive } =
  locationsSlice.actions;
export const { createHive, addDoc } = hiveSlice.actions;
export const { createDoc } = documentationSlice.actions;
//export const { setThemeToDark, setThemeToLight } = settingsSlice.actions;
export { hiveSlice, locationsSlice, documentationSlice };
