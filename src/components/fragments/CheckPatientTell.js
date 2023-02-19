import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Toolbar } from "@mui/material";

import Grid from "@mui/material/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    minWidth: 200,
    // minHeight: 80,
  },
  buttonText: {
    fontSize: 80,
  },
  buttonText2: {
    fontSize: 50,
  },
}));

export default function CheckPatientTell(Props) {
  const hometel = Props.Hometel;
  const [open, setOpen] = useState(true);
  const [submitButton, setsubmitButton] = useState(true);
  const [tell, settell] = useState([hometel]);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [buttonNumber, setbuttonNumber] = useState(false);
  useEffect(() => {
    const length = tell.length;
    if (length === 10) {
      setsubmitButton(false);
      setbuttonNumber(true);
    }
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid
            spacing={3}
            container
            justifyContent={"center"}
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">ตรวจสอบเบอร์โทรศัพท์</Typography>
            </Grid>
            <Grid item xs={12} lg={12}>
              <TextField
                label="ใส่เบอร์โทรศัพท์ของท่านหรือของญาติ"
                inputProps={{ style: { fontSize: 80 } }} // font size of input text
                fullWidth
                value={tell.join("")}
              />
            </Grid>
          </Grid>
          <Toolbar />
          <div className={classes.root}>
            <Box
              sx={{
                width: 800,

                // backgroundColor: "primary.dark",
              }}
            >
              <Grid
                container
                display="flex"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={9}></Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 1]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>1</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 2]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>2</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 3]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>3</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 4]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>4</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 5]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>5</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 6]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>6</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 7]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>7</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 8]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>8</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // onClick={() => onAddArray("9")}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 9]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>9</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="warning"
                    className={classes.button}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([]);
                      setbuttonNumber(false);
                      setsubmitButton(true);
                      //  dispatch(setPatientData(null));
                    }}
                  >
                    <span className={classes.buttonText2}>แก้ไข</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // onClick={() => onAddArray("0")}
                    onClick={(e) => {
                      e.preventDefault();
                      settell([...tell, 0]);
                    }}
                    disabled={buttonNumber}
                  >
                    <span className={classes.buttonText}>0</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    //disabled={buttonOk}
                    variant="contained"
                    color="success"
                    className={classes.button}
                    disabled={submitButton}
                    type="submit"
                    onClick=""
                  >
                    <span className={classes.buttonText2}>ตกลง</span>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>แก้ไข</Button>
          <Button onClick={handleClose}>ถูกต้อง</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
