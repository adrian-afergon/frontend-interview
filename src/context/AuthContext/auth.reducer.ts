import {AuthState} from "./auth.state";

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

type AuthLoginAction = {
  type: AuthActionTypes.LOGIN
  payload: {username: string|null}
}

type AuthLogoutAction = {
  type: AuthActionTypes.LOGOUT
}

type AuthAction = AuthLoginAction | AuthLogoutAction

export const reducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {...state, username: action.payload.username};
    case AuthActionTypes.LOGOUT:
      return {...state, username: null};
    default:
      throw new Error('Unhandled auth action');
  }
};