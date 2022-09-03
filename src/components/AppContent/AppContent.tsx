import React from "react";
import {Container, Toolbar} from "@mui/material";

type Props = {
  children?: React.ReactNode
}

export const AppContent: React.FC<Props> = ({children}) => (
  <Container component="main">
    <Toolbar/>
    {children}
  </Container>
)