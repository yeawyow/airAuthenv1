import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";
import ovstSlice from "./ovstSlice";

import nhsoSlice from "./nhsoSlice";

export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    nhsoPerson: nhsoSlice,
    patient: patientSlice,
    ovst: ovstSlice,
  },
});
setupListeners(store.dispatch);
