import {Button, TextField, Typography} from "@mui/material";
import React from "react";
import {useDataMutation} from "../../../hooks/useDataMutation";
import {createBus} from "../../../api/buses.http";

export const CreateBus: React.FC = () => {

  useDataMutation({key: 'bus', mutation: createBus})

  return <>
    <Typography>Create Bus</Typography>

    <form>
      <TextField
        type="text"
        label="Brand"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        autoFocus
      />
      <TextField
        type="number"
        label="Registration Number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        type="number"
        label="Max. Passengers"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        type="text"
        label="length"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <Button variant="contained">Create Bus</Button>
    </form>

  </>
}