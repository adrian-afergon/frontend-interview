import React from "react";
import {Box, Toolbar} from "@mui/material";

type Props = {
  children?: React.ReactNode
}

export const AppContent: React.FC<Props> = ({children}) => (
  <Box component="main" sx={{p: 3}}>
    <Toolbar/>
    {children}
  </Box>
)