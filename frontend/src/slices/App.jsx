import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItem = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("http://localhost:1337/");
  return response.data;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemSlice.reducer;
export const {} = itemSlice.actions;
