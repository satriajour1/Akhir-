import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const reducer = {
    auth: authSlice
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})
export default store;