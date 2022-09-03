import React, {ChangeEvent, FormEvent} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useAuth} from "../../hooks/useAuth";
import {useNavigate, useSearchParams} from "react-router-dom";

export const Login: React.FC = () => {
  const {login} = useAuth()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({username, password})
    const redirection = searchParams.get('redirect')
    navigate(redirection || '/', {replace: true})
  }

  const disabled = !username || !password;

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
        <TextField
          label="Username/Email"
          type="text"
          value={username}
          onChange={handleUsername}
          margin="normal"
          fullWidth
          required
          autoFocus
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePassword}
          margin="normal"
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          disabled={disabled}
          fullWidth
        >
          Login
        </Button>
        <Button
          variant="outlined"
          href="/"
          fullWidth
        >
          Cancel
        </Button>
      </Box>
    </Box>

  )

}