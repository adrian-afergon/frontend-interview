import React from "react";
import {Outlet} from "react-router-dom";
import {LinkTab} from "../../components/LinkTab";
import {NavTab} from "../../components/NavTab";
import {Typography} from "@mui/material";

export const Dashboard: React.FC = () =>  {
  return <section>
    <NavTab>
      <LinkTab label="View" to="view" />
      <LinkTab label="Create" to="create" />
    </NavTab>
    <>
      <Typography>Dashboard</Typography>
    </>
    <Outlet />

  </section>
}