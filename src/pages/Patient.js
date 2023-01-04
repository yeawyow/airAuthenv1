import React, { useEffect } from "react";
//import Card from "@mui/material/Card";
//import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodoAsync } from "../app/nhsoSlice";
import { getPatientAsync } from "../app/patientSlice";
import HosService from "../components/fragments/HosService";

export default function Patient() {
  let navigate = useNavigate();
  const person = useSelector((state) => state.nhsoPerson?.data);
  const cardId = useSelector((state) => state.mqttcon?.cardId);
  const cid = useSelector((state) => state.mqttcon?.cardId?.data?.cid);
  const patient = useSelector((state) => state.patient.patientData.result);

  /* const { data, error, isLoading, isSuccess, isFetching } =
    useGetAllAttractionsQuery(patientData.cid);*/
  console.log(patient);
  const dispatch = useDispatch();
  if (cardId === null) {
    navigate("/");
  }
  //console.log(data);
  useEffect(() => {
    if (cid) {
      dispatch(getTodoAsync());
      dispatch(getPatientAsync(cid));
    }
    if (cardId === null) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {person
        ? person?.map((person) => {
            return (
              <>
                <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                  <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
                  >
                    <Stack direction="row" alignItems="center" gap={1}></Stack>

                    <Grid container spacing={12}>
                      <Grid item xs={2} sm={3}>
                        <Box
                          sx={{
                            display: "flex",
                            "& > :not(style)": {
                              // m: 1,
                              width: 300,
                              height: 200,
                            },
                          }}
                        >
                          <img src={`data:image/jpeg;base64,${person.image}`} />
                          <Paper variant="outlined" />
                        </Box>
                      </Grid>
                      <Grid item sm={8}>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">pid:</Typography>
                            <Typography variant="h5">{person.pid}</Typography>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h3">
                              {person.fname} {person.lname}
                            </Typography>
                          </Stack>
                        </Box>

                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">สิทธิหลัก:</Typography>
                            <Typography variant="h5">
                              {person.mainInscl}
                            </Typography>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">สิทธิรอง:</Typography>
                            <Typography variant="h5">
                              {person.subInscl}
                            </Typography>
                          </Stack>
                        </Box>

                        <Box>
                          <Stack direction="row" alignItems="center" gap={1}>
                            <Typography variant="h5">อายุ:</Typography>
                            <Typography variant="h5">{person.age}</Typography>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>

                <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <HosService />
                </Container>
              </>
            );
          })
        : navigate("/")}
    </div>
  );
}
