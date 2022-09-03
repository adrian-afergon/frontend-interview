import {LoginForm} from "./LoginForm";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('<LoginForm />', () => {

  it('should disable login button when no username', () => {
    render(<LoginForm onLogin={jest.fn}/>)
    userEvent.type(screen.getByPlaceholderText('Username'), '')

    expect(screen.getByRole('button', {name: 'Login'})).toBeDisabled()
  })


  it('should disable login button when no password', () => {
    render(<LoginForm onLogin={jest.fn}/>)
    userEvent.type(screen.getByPlaceholderText('Password'), '')

    expect(screen.getByRole('button', {name: 'Login'})).toBeDisabled()
  })

  it('should trigger login event when submit the form', () => {
    const onLoginMock = jest.fn()
    render(<LoginForm onLogin={onLoginMock}/>)
    userEvent.type(screen.getByPlaceholderText('Username'), 'irrelevant')
    userEvent.type(screen.getByPlaceholderText('Password'), 'irrelevant')

    const loginButton = screen.getByRole('button', {name: 'Login'})
    expect(loginButton).toBeEnabled()

    userEvent.click(loginButton)
    expect(onLoginMock).toHaveBeenCalledWith({username: 'irrelevant', password: 'irrelevant'})
  })

})