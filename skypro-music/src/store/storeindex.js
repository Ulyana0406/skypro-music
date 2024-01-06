import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./track/trackSlice";

export const store = configureStore({
  reducer: {
    trackReducer,
  },
});
