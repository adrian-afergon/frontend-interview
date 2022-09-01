import React from "react";
import {Button, TextField, Typography} from "@mui/material";

export const Login: React.FC = () => {

 return (
   <>
     <Typography>Login</Typography>
     <form>
       <TextField
        label="Username/Email"
        type="text"
       />

       <TextField
         label="Password"
         type="password"
         />

       <Button type="submit" variant="contained">Login</Button>
       <Button variant="outlined" href="/">Cancel</Button>
     </form>
   </>

 )

}