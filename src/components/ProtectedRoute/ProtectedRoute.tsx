import React, {ReactNode} from "react";
import {useAuth} from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

type Props = {
  children: ReactNode,
  redirect?: string
}

export const ProtectedRoute: React.FC<Props> = ({children, redirect= '/'}) => {
  const { username } = useAuth();
  if (!username) {
    return <Navigate to={`/login?redirect=${redirect}`} replace />;
  }

  return <>{children}</>
}