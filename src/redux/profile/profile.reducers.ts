import {PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../interfaces/User";

export const profileReducer = {
  set: {
    reducer: (_: User, action: PayloadAction<User>): User => {
      return action.payload;
    },
    prepare: (profile: User) => ({
      payload: {...profile},
    }),
  },
};
