import {TextField, Typography} from "@mui/material";
import React from "react";

export const CreateBus: React.FC = () => {

  return <>
    <Typography>Create Bust</Typography>

    <form>
      <TextField
        type="text"
        label="Name"
        variant="outlined"
      />
      <TextField
        type="text"
        label="Flag"
        variant="outlined"
      />
      <TextField
        type="number"
        label="Registration Number"
        variant="outlined"
      />
      <TextField
        type="number"
        label="Max. Passengers"
        variant="outlined"
      />
      <TextField
        type="text"
        label="length"
        variant="outlined"
        />

    </form>

  </>
}