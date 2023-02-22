import React from "react";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import Datetime from "./Datetime";
export default function Logo() {
  return (
    <div>
      <Grid
        container
        justifyContent={"center"}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <img src="././images/moph-logo.gif" width={"200"} />
        </Grid>
        <Grid item>
          <Typography variant="h2">โรงพยาบาลอากาศอำนวย</Typography>
          <Datetime />
        </Grid>
      </Grid>
    </div>
  );
}
