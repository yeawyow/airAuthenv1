import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardId: null,
  cardImage: null,
  cardStatus: "CARD_EXITED",
};
export const mqttConSlice = createSlice({
  name: "mqttcon",
  initialState,
  reducers: {
    setCardId: (state, action) => {
      state.cardId = action.payload;

      // localStorage.setItem("cid", action.payload.cid);
    },
    setcardImage: (state, action) => {
      state.cardImage = action.payload;
    },
    setcardStatus: (state, action) => {
      state.cardStatus = action.payload;
    },
  },
});
export const { setCardId, setcardImage, setcardStatus } = mqttConSlice.actions;

export default mqttConSlice.reducer;
