import React from "react";
import {Outlet} from "react-router-dom";
import {LinkTab} from "../../components/LinkTab";
import {NavTab} from "../../components/NavTab";
import {Box} from "@mui/material";

export const Dashboard: React.FC = () =>  {
  return <Box>
    <NavTab>
      <LinkTab label="View" to="view" />
      <LinkTab label="Create" to="create" />
      <LinkTab label="Status" to="status" />
    </NavTab>
    <Outlet />

  </Box>
}