import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert2 from "react-sweetalert2";
import { useNavigate } from "react-router-dom";
import DepService from "./DepService";
import { getOvstAsync } from "../../app/ovstSlice";

export default function HosService(props) {
  const patient = useSelector((state) => state.patient.patientData);
  const ovst = useSelector((state) => state.ovst.ovstData);

  const [swalProps, setSwalProps] = useState({});

  let navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(ovst);
  useEffect(() => {
    if (patient.hn) {
      dispatch(getOvstAsync(patient.hn));
      if (ovst.vn === "") {
        setSwalProps({
          show: true,
          title: "ท่านยังไม่เปิดการบริการภายในวัน",
          text: "กรุณาติดต่อห้องบัตร",
          timer: 5000,
        });
      }
    } else {
      setSwalProps({
        show: true,
        title: "ไม่พบข้อมูลของท่าน",
        text: "กรุณาติดต่อห้องบัตร",
        timer: 5000,
      });
    }
  }, []);
  return (
    <div>
      {patient.hn ? (
        <Paper
          variant="none"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <DepService />
            </Grid>
            <Grid item sm={12}></Grid>
          </Grid>
        </Paper>
      ) : (
        <></>
      )}
      <SweetAlert2
        {...swalProps}
        didOpen={() => {
          // run when swal is opened...
        }}
        didClose={() => {
          navigate("/");
          // run when swal is closed...
        }}
        onConfirm={(result) => {
          // run when clieked in confirm and promise is resolved...
        }}
        onError={(error) => {
          // run when promise rejected...
        }}
        onResolve={(result) => {
          // run when promise is resolved...
        }}
      />
    </div>
  );
}
