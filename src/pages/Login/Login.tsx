import React from "react";
import {useAuth} from "../../hooks/useAuth";
import {useNavigate, useSearchParams} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm";
import {OnLoginParams} from "../../components/LoginForm/LoginForm";

export const Login: React.FC = () => {
  const {login} = useAuth()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = ({username, password}: OnLoginParams) => {
    login({username, password})
    const redirection = searchParams.get('redirect')
    navigate(redirection || '/', {replace: true})
  }

  return (
    <LoginForm onLogin={handleSubmit} />
  )

}