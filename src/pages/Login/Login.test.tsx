import {Login} from "./Login";
import {render, screen} from "@testing-library/react";
import React from "react";
import {OnLoginParams} from "../../components/LoginForm/LoginForm";
import userEvent from "@testing-library/user-event";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const username = 'irrelevant'
const password = 'irrelevant'

jest.mock('../../components/LoginForm', () => ({
  LoginForm: (props: {onLogin: (params: OnLoginParams) => void}) =>
    <button onClick={() => props.onLogin({username, password})}>Login</button>,
}))

jest.mock('../../hooks/useAuth')
const mockUseAuth = useAuth as jest.Mock<ReturnType<typeof useAuth>>

jest.mock('react-router-dom')
const mockUseNavigate = useNavigate as jest.Mock<ReturnType<typeof useNavigate>>;
const mockUseSearchParams = useSearchParams as jest.Mock<ReturnType<typeof useSearchParams>>;


describe('<Login />', () => {
  it('should makes login and redirect', () => {
    const loginMock = jest.fn()
    const navigateMock = jest.fn()
    mockUseNavigate.mockReturnValue(navigateMock)
    mockUseAuth.mockReturnValue({login: loginMock, logout: jest.fn(), username: null})
    mockUseSearchParams.mockReturnValue([{get: (_: string) => 'redirect'} as URLSearchParams, jest.fn ])
    render(<Login />)

    userEvent.click(screen.getByText('Login'))

    expect(loginMock).toHaveBeenCalledWith({username, password})
    expect(navigateMock).toHaveBeenCalledWith('redirect', {replace: true})

  })
})