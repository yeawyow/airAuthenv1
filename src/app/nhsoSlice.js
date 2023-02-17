import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../Constants";
export const getNhsoPerson = createAsyncThunk(
  "nhsoPerson/getNhoPerson",
  async () => {
    try {
      const response = await axios.get(
        server.ApismartcardAgent + server.Smartcard
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const nhsoSlice = createSlice({
  name: "nhsoPerson",
  initialState: {
    data: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    removePerson: (state, action) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNhsoPerson.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getNhsoPerson.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.hasError = false;
    });
    builder.addCase(getNhsoPerson.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = action.error.message;
    });
  },
  /* reducers: {
    getPerson: (state, action) => {
      state.data.push(action.payload);
      // state.pid = [action.payload.pid];
    },
    removePerson: (state, action) => {
      state.data = [];
    },
  },*/
});

/*export const getTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8189/api/smartcard/read?readImageFlag=true`
    );
    dispatch(getPerson(response.data));
  } catch (err) {
    throw new Error(err);
  }
};*/

export const { getPerson, removePerson } = nhsoSlice.actions;

export default nhsoSlice.reducer;
