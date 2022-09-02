import React from "react";
import {Box, CircularProgress} from "@mui/material";

export const Loader: React.FC = () => (
  <Box aria-busy="true">
    <CircularProgress />
  </Box>
)