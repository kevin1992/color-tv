import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "./rootReducer";
import {User} from "../interfaces/User";

const middleware = [...getDefaultMiddleware()];

export default configureStore({
    reducer,
    middleware,
});

export interface State {
    profile: User
}