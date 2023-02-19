import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./components/fragments/Logo";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IdCard from "./pages/IdCard";
import ManualCid from "./components/fragments/ManualCid";
import Patient from "./pages/Patient";
import MQTTConnect from "./components/MQTT_Connector/Connection";
import NumberPhone from "./pages/NumberPhone";
import Box from "@mui/material/Box";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif Thai, serif",
  },
  palette: {
    background: {
      default: "#22222",
    },
  },
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid spacing={3}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
          <Grid item xs={12}>
            <Router>
              <MQTTConnect />
              {/*}  <Toolbar variant="dense" />{*/}

              <Routes>
                <Route path="/" element={<IdCard />}></Route>
                <Route path="/number" element={<ManualCid />}></Route>
                <Route path="/patient" element={<Patient />}></Route>
                <Route path="/ptphone" element={<NumberPhone />}></Route>
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
