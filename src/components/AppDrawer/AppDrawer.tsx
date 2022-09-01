import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import React, {ReactNode} from "react";

type Props = {
  title: string
  navItems: ReactNode[]
  open: boolean
  drawerWidth?: number
  onMenuIconClick: () => void
}

export const AppDrawer: React.FC<Props> = ({title, navItems, onMenuIconClick, open, drawerWidth = 240}) => (
  <Box component="nav">
    <Drawer
      variant="temporary"
      open={open}
      onClose={onMenuIconClick}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: {xs: 'block', sm: 'none'},
        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
      }}
    >
      <Box onClick={onMenuIconClick} sx={{textAlign: 'center'}}>
        <Typography variant="h6" sx={{my: 2}}>
          {title}
        </Typography>
        <Divider/>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index.toString()} disablePadding>
              <ListItemButton sx={{textAlign: 'center'}}>
                <ListItemText primary={item}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  </Box>
)