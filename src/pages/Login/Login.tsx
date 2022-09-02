import React, {ChangeEvent, FormEvent} from "react";
import {Button, TextField, Typography} from "@mui/material";
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
    navigate(redirection || '/', { replace: true })
  }

  const disabled = !username || !password;

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <Typography>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username/Email"
          type="text"
          value={username}
          onChange={handleUsername}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePassword}
        />

        <Button type="submit" variant="contained" disabled={disabled}>Login</Button>
        <Button variant="outlined" href="/">Cancel</Button>
      </form>
    </>

  )

}