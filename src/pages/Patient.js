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
import { getNhsoPerson } from "../app/nhsoSlice";
import { getPatientAsync } from "../app/patientSlice";
import HosService from "../components/fragments/HosService";
import { getAuthenAsync } from "../app/nhsoAuthenSlice";
import CheckPatientTell from "../components/fragments/CheckPatientTell";

export default function Patient() {
  let navigate = useNavigate();
  const person = useSelector((state) => state.nhsoPerson.data);
  const personIsloading = useSelector((state) => state.nhsoPerson.isLoading);
  //const person = useSelector(selectNhsoPerson);
  const cardId = useSelector((state) => state.mqttcon?.cardId);
  const cid = useSelector((state) => state.mqttcon?.cardId?.data?.cid);
  const patient = useSelector((state) => state.patient.patientData);

  /* const { data, error, isLoading, isSuccess, isFetching } =
    useGetAllAttractionsQuery(patientData.cid);*/

  const dispatch = useDispatch();
  if (cardId === null) {
    navigate("/");
  }

  async function checkPerson() {
    dispatch(getNhsoPerson());
    await dispatch(getPatientAsync(cid));
    // await dispatch(getAuthenAsync(cid));
  }
  useEffect(() => {
    if (cid) {
      checkPerson();
      //dispatch(getTodoAsync());
    }
    if (cardId === null) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {personIsloading ? (
        <h1>กำลังอ่านข้อมูล</h1>
      ) : (
        <>
          <h2>เสร็จแล้ว</h2>
          {person ? (
            // person?.map((person) => {
            // return (
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
                {/*} <HosService />{*/}
                <CheckPatientTell Hometel={patient.Hometel} />
              </Container>
            </>
          ) : (
            //  );
            //  }
            //  )
            navigate("/")
          )}
        </>
      )}
    </div>
  );
}
