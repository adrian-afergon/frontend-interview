import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import React, {ReactNode} from "react";

type Props = {
  title: string
  navItems: ReactNode[]
  onMenuIconClick: () => void
}


export const AppHeader: React.FC<Props> = ({title, navItems, onMenuIconClick}) => (
  <AppBar position="fixed" component="nav">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2, display: {sm: 'none'}}}
                  onClick={onMenuIconClick}>
        <Menu/>
      </IconButton>
      <Typography variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
      >
        {title}
      </Typography>
      <Box sx={{display: {xs: 'none', sm: 'block'}}}>
        {navItems.map((item, index) => (
          <Button key={index.toString()} sx={{color: '#fff'}}>
            {item}
          </Button>
        ))}
      </Box>
      <Button>Login</Button>
    </Toolbar>
  </AppBar>
)