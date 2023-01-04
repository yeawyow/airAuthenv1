import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const nhsoSlide = createSlice({
  name: "nhsoPerson",
  initialState: {
    data: [],
  },
  reducers: {
    getPerson: (state, action) => {
      state.data.push(action.payload);
      // state.pid = [action.payload.pid];
    },
    removePerson: (state, action) => {
      state.data = [];
    },
  },
});

export const getTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8189/api/smartcard/read?readImageFlag=true`
    );
    dispatch(getPerson(response.data));
  } catch (err) {
    throw new Error(err);
  }
};
export const { getPerson, removePerson } = nhsoSlide.actions;
export default nhsoSlide.reducer;
