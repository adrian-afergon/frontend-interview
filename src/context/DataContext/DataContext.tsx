import React, {ReactNode} from "react";
import {QueryClient, QueryClientProvider,} from 'react-query'

const queryClient = new QueryClient()

type Props = {
  children: ReactNode
}

export const DataProvider: React.FC<Props> = ({children}) => {

  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}