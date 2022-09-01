import React, {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

type Props = {
  children: ReactNode
}

export const ProtectedRoute: React.FC<Props> = ({children}) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}