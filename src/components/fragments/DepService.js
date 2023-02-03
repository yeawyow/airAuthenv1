import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
export default function DepService() {
  const ovst = useSelector((state) => state.ovst.ovstData);
  return (
    <div>
      {ovst.vn}
      <Button
        fullWidth
        variant="contained"
        style={{ textTransform: "none", padding: "50px 0px" }} //button Size change in React Material U
        disableElevation
      >
        <h1>กดยืนยันเข้ารับบริการ</h1>
      </Button>
    </div>
  );
}
