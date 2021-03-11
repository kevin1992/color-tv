import { createSlice } from "@reduxjs/toolkit";
import { profileInitialState, profileReducer } from ".";

export const profileSlice = createSlice({
  name: "profile", // name used in action types
  initialState: profileInitialState, // initial state for the reducer
  reducers: profileReducer,
});

export const {
  actions: { set: setProfileActionCreator },
} = profileSlice;
