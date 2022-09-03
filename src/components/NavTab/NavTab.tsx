import {Tabs} from "@mui/material";
import React, {ReactNode} from "react";

type Props = {
  children: ReactNode[]
}

export const NavTab: React.FC<Props> = ({children}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} variant="fullWidth">
      {children}
    </Tabs>)
}