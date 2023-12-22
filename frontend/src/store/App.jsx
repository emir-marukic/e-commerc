import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../slices/App";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
