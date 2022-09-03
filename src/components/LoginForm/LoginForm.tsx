import React, {ChangeEvent, FormEvent} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";

export type OnLoginParams = {
  username: string
  password: string
}

type Props = {
  onLogin: (login: OnLoginParams) => void
}

export const LoginForm: React.FC<Props> = ({onLogin}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onLogin({username, password})
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
          placeholder="Username"
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
          placeholder="Password"
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