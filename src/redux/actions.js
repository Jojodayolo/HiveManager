import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";

const userSlice = createSlice({
  name: "user",
  initialState: { user: {} },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

//export const { setThemeToDark, setThemeToLight } = settingsSlice.actions;
export default userSlice;
export const { setUser } = userSlice.actions;
