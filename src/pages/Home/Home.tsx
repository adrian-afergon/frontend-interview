import React from "react";
import {Box, List, ListItem, Typography} from "@mui/material";
import {Blockquote} from "../../components/Blockquote";

export const Home: React.FC = () =>
  <Box>
    <Typography variant="h3">
      💡 About the example
    </Typography>
    <Typography component="p">
      This example represent an application for handling a bus system. You can reach some endpoints for retrieving
      buses, brands and the status of those services.
    </Typography>
    <Typography component="p">
      For accessing to the dashboard you must be logged in, you can find the credentials at <code>/config.ts</code>.
    </Typography>
    <Typography variant="h3">
      👀 Some activities that you can do
    </Typography>
    <Typography component="p">
      It's up to you to implement whatever you want at the application, however here we will have some proposals for
      practicing:
    </Typography>
    <List>
      <ListItem sx={{ display: 'list-item' }}><Typography>Add error state to the <code>AuthState</code>and to the <code>Login</code></Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Create some Profile page and extend the current <code>AuthState</code></Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Implement the <code>Logout</code>at header.</Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Extract the conditions for authentication to a domain.</Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Implement the view where you will see all the buses.</Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Connect the <code>Create Bus</code>page with api, validating the form.</Typography></ListItem>
      <ListItem sx={{ display: 'list-item' }}><Typography>Keep the <code>AuthState</code>also when you close and open the browser.`</Typography></ListItem>
    </List>
    <Blockquote>
      <Typography>🚧 Some smells have been introduced at the application, so is up to you to remark it in some way or refactor if you
      consider it.</Typography>
    </Blockquote>
    <Typography component="p">
      Remember, this is a Kata and the most important thing is to learn and have fun! 🎉.
    </Typography>
  </Box>