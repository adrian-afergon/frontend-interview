import {Tab} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

type Props = {
  label?: string;
  to: string;
}

export const LinkTab: React.FC<Props> = (props) =>
  (
    <Tab
      component={Link}
      {...props}
    />
  )