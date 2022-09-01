import React from "react";

export const useAuth = () => {

  const [token, setToken] = React.useState<string|null>(null)

  return {token}
}