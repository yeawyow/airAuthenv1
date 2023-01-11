import { createSlice } from "@reduxjs/toolkit";
import { server } from "../Constants";
import axios from "axios";
const initialState = {
  ovstData: [],
};
export const ovstSlice = createSlice({
  name: "ovst",
  initialState,
  reducers: {
    setOvstData: (state, action) => {
      state.ovstData = action.payload;
    },
  },
});
export const getOvstAsync = (data) => async (dispatch) => {
  try {
    const respatient = await axios.get(
      server.apiHisUrl + server.OVST_URL + `${data}`
    );

    if (respatient.data === "") {
    } else {
      dispatch(setOvstData(respatient.data));
      // resovst()
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const { setOvstData } = ovstSlice.actions;

export default ovstSlice.reducer;
