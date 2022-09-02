import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext, AuthProvider} from "./AuthContext";
import React, {useContext} from "react";

describe('AuthContext', () => {
  describe('<AuthProvider />', () => {

    type Props = {
      username: string
      password: string
    }
    const AuthConsumerTest: React.FC<Props> = (props) => {
      const {login, logout, username} = useContext(AuthContext)
      return (
        <>
          {username}
          <button onClick={() => login({username: props.username, password: props.password})}>Login</button>
          <button onClick={logout}>Logout</button>
        </>
      )
    }

    const makeLogin = (props: Props) => {
      render(<AuthProvider>
        <AuthConsumerTest username={props.username} password={props.password}/>
      </AuthProvider>)

      fireEvent.click(screen.getByText('Login'))
    }

    it('should assign username when login is made with correct values', async () => {
      makeLogin({
        username: 'admin',
        password: 'admin'
      })

      const username = await screen.findByText('admin')
      expect(username).toBeInTheDocument()
    })

    it('should clean username when logout is made', async () => {
      makeLogin({
        username: 'admin',
        password: 'admin'
      })

      const username = await screen.findByText('admin')
      expect(username).toBeInTheDocument()

      fireEvent.click(screen.getByText('Logout'))
      const noUsername = await screen.queryByText('admin')

      expect(noUsername).not.toBeInTheDocument()
    })

  })

})