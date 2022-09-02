import React, {ReactNode} from "react";
import {config} from "../../config";

type LoginParams = {
  username: string
  password: string
}

type AuthContextProps = {
  username: string|null
  login: (params: LoginParams) => void
  logout: () => void
}

export const AuthContext  = React.createContext<AuthContextProps>({
  username: null,
  login: () => undefined,
  logout: () => undefined
})

enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type Props = {
  children: ReactNode
}

type AuthState = {
  username: string|null
}

type AuthLoginAction = {
  type: AuthActionTypes.LOGIN
  payload: {username: string|null}
}

type AuthLogoutAction = {
  type: AuthActionTypes.LOGOUT
}

type AuthAction = AuthLoginAction | AuthLogoutAction

const initialState: AuthState = { username: null}

const reducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {...state, username: action.payload.username};
    case AuthActionTypes.LOGOUT:
      return {...state, username: null};
    default:
      throw new Error();
  }
};

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

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      username: state.username,
    }}>
      {children}
    </AuthContext.Provider>
  )
}