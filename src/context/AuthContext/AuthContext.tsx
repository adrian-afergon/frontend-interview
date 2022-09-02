import React, {ReactNode} from "react";
import {config} from "../../config";
import {AuthActionTypes, reducer} from "./auth.reducer";
import {initialState} from "./auth.state";

type LoginParams = {
  username: string
  password: string
}

type AuthContextValue = {
  username: string|null
  login: (params: LoginParams) => void
  logout: () => void
}

export const AuthContext  = React.createContext<AuthContextValue>({
  username: null,
  login: () => undefined,
  logout: () => undefined
})

type Props = {
  children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({children}) => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const login = ({username, password}: LoginParams) => {
    if (username === config.username && password === config.password) {
      dispatch({type: AuthActionTypes.LOGIN, payload: {username}})
    }
  }

  const logout = () => {
    dispatch({type: AuthActionTypes.LOGOUT})
  }

  const contextValue:AuthContextValue = {
    login,
    logout,
    username: state.username,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}