import {AuthActionTypes, reducer} from "./auth.reducer";
import {initialState} from "./auth.state";

describe('Auth Reducer', () => {

  it('should set username at state when Login action is run', () => {
    const username = 'irrelevant'
    const state = reducer(initialState, {type: AuthActionTypes.LOGIN, payload: {username}})

    expect(state.username).toEqual(username)
  })

  it('should clean username at state when Login action is run', () => {
    const username = 'irrelevant'
    const state = reducer({...initialState, username}, {type: AuthActionTypes.LOGOUT})

    expect(state.username).toBeNull()
  })

});