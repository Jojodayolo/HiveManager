import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [
        {uuid: "d96b98a2-517f-999c-20f1-0ab32e561d18",name:'TestNameLoc', address: 'Home', notes: 'Dingsbums', hiveIDs: []},
        {uuid: "691aeaf6-525f-11ee-9de2-89d3bccd3202",name:'TestNameLoc2', address: 'Home2', notes: 'Dingsbums2', hiveIDs: []},
    ],
    },
    reducers: {
        createLocation: (state, action) => {
            /*TODO:
            * - chech double names
            * - create uuid
            * - check if uuid exists
            */

            state.locations.push(            
                {
                uuid: uuid(),
                name: action.payload.name,
                address: action.payload.address,
                notes: action.payload.notes,
                hiveIDs: []});
        },
        removeLocation: (state, action) => {
            state.locations = state.locations.filter( uuid => uuid !== action.payload);
        },
        getFirst: (state) => {
            return(state.locations[0]);
        },
        addHive: (state, action) => {
            const hiveUuid = state.hives.createHive(action.payload.name);
            state.locations.forEach(loc => {
                if (loc.uuid === action.payload.locUuid) {
                    loc.hiveIDs.push(hiveUuid);
                }
            });
        },
    },
});


const hiveSlice = createSlice({
    name: "hives",
    initialState:{
        hives:[
        {uuid: '1',name:'Hive1'},
        {uuid: '2',name:'Hive2'}
    ]},
    reducers: {
        createHive: (state,action) => {
            var newHive;
            newHive.uudi = uuid();
            newHive.name = action.payload.name;
            state.hives.push(newHive);
            return(newHive.uudi);
        },
    },
});


export const {createLocation, removeLocation, getFirst} = locationsSlice.actions;
export default locationsSlice.reducer;
