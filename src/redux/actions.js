import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import uuid from "react-uuid";

const locationInitialState = [
  {
    uuid: "d96b98a2-517f-999c-20f1-0ab32e561d18",
    name: "TestNameLoc",
    address: "Home",
    notes: "Dingsbums",
    hiveIDs: [1, 2],
  },
  {
    uuid: "691aeaf6-525f-11ee-9de2-89d3bccd3202",
    name: "TestNameLoc2",
    address: "Home2",
    notes: "Dingsbums2",
    hiveIDs: [],
  },
];

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
      //console.log(state, action);
      //somehow call createHive and add the HiveId to the Location
      /*state.forEach((loc) => {
        if (loc.uuid === action.payload.locUuid) {
          loc.hiveIDs.push(hiveUuid);
          return;
        }
      })*/
    },
  },
});

const hiveSlice = createSlice({
  name: "hives",
  initialState: [
    { uuid: "1", name: "Hive1" },
    { uuid: "2", name: "Hive2" },
  ],
  reducers: {
    createHive: (state, action) => {
      var newHive;
      newHive.uuid = uuid();
      newHive.name = action.payload.name;
      state.hives.push(newHive);
      return newHive.uuid;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(locationsSlice.actions.addHive, (state, action) => {
      console.log("Test:", state, action);
    });
  },
});

export const { createLocation, removeLocation, getFirst, addHive } =
  locationsSlice.actions;
export { hiveSlice, locationsSlice };
