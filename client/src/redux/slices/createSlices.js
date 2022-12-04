import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleForm: false,
  formId: undefined,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleFormAction: (state, { payload }) => {
      state.toggleForm = !state.toggleForm;
    },
    toggleUpdate: (state, { payload }) => {
      state.formId = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFormAction, toggleUpdate } = dataSlice.actions;

export default dataSlice.reducer;
