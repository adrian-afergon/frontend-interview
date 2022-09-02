import {render, screen} from "@testing-library/react";
import {ProtectedRoute} from "./ProtectedRoute";
import {Login} from "../../pages/Login";
import React from "react";
import {useAuth} from "../../hooks/useAuth";

jest.mock('react-router-dom', () => ({
  Navigate: () => <>Login</>
}))

jest.mock("../../hooks/useAuth")
const mockedUseAuth = useAuth as jest.Mock<ReturnType<typeof useAuth>>;


describe('<ProtectedRoute />', () => {
  it('should redirect to /login when system has not username', () => {
    mockedUseAuth.mockReturnValue({username: null, login:jest.fn, logout:jest.fn})
    render(<ProtectedRoute>Irrelevant</ProtectedRoute>)

    screen.getByText('Login')
  })

  it('should display the children when system has username', () => {
    mockedUseAuth.mockReturnValue({username: 'irrelevant', login:jest.fn, logout:jest.fn})
    render(<ProtectedRoute>Irrelevant</ProtectedRoute>)

    screen.getByText('Irrelevant')
  })

});