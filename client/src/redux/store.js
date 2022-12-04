import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux//slices/createSlices";
import listenerMiddleware from "./listener";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
