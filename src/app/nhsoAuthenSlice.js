import { createSlice } from "@reduxjs/toolkit";
import { server } from "../Constants";
import axios from "axios";

export const authenSlice = createSlice({
  name: "nhsoAuthen",
  initialState: {
    authenCode: {
      hcode: "",
    },
  },
  reducers: {
    setAuthen: (state, action) => {
      const { authen } = action.payload;

      //state.authenCode.push(action.payload);
      // state.pid = [action.payload.pid];
    },
    removePerson: (state, action) => {
      state.data = [];
    },
  },
});

export const getAuthenAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      server.ApismartcardAgent + server.LastAuthen + `${data}`
    );
    console.log(response);
    dispatch(setAuthen(response.data.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { setAuthen, removePerson } = authenSlice.actions;

export default authenSlice.reducer;
