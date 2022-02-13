import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFeatures = createAsyncThunk(
  "features/fetchFeatures",
  async () => {
    const response = await fetch("http://localhost:5000/features").then((res) =>
      res.json()
    );
    return response[0].data;
  }
);

export const featureSlice = createSlice({
  name: "feature",
  initialState: {
    displayFeatures: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeatures.fulfilled, (state, action) => {
      state.displayFeatures = action.payload;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = featureSlice.actions;

export default featureSlice.reducer;
