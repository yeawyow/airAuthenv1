import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";
import ovstSlice from "./ovstSlice";
import authenSlice from "./nhsoAuthenSlice";
import nhsoSlice from "./nhsoSlice";

export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    nhsoPerson: nhsoSlice,
    patient: patientSlice,
    ovst: ovstSlice,
    authenCode: authenSlice,
  },
});
setupListeners(store.dispatch);
