import { createSlice } from "@reduxjs/toolkit";
import { server } from "../Constants";
import axios from "axios";
const initialState = {
  patientData: {
    hn: null,
    fname: null,
    lname: null,
    cid: null,
    hometel: null,
  },
};
export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientData: (state, action) => {
      state.patientData = action.payload;
    },
  },
});
export const getPatientAsync = (data,hn) => async (dispatch) => {
  try {
    const respatient = await axios.get(
      server.apiHisUrl + server.PATIENT_URL + `${data}`
    );
    const resovst = await axios.get(
      server.apiHisUrl+ server.OVST_URL+ `${hn}`
    );
    if (respatient.data.result === "") {
    } else {
      dispatch(setPatientData(respatient.data));
     // resovst()
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const { setPatientData } = patientSlice.actions;

export default patientSlice.reducer;
