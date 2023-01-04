import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";

import nhsoSlice from "./nhsoSlice";
export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    nhsoPerson: nhsoSlice,
    patient: patientSlice,
  },
});
setupListeners(store.dispatch);
