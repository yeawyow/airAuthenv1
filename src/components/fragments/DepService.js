import React from "react";
import Button from "@mui/material/Button";
export default function DepService() {
  return (
    <div>
      {" "}
      <Button
        fullWidth
        variant="contained"
        style={{ textTransform: "none", padding: "150px 0px" }} //button Size change in React Material U
        disableElevation
      >
        กดยืนยันเข้ารับบริการ
      </Button>
    </div>
  );
}
