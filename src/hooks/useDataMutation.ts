import { useMutation } from "react-query"
import { useQueryClient } from 'react-query'

interface UseDataMutation<T> {
  key: string,
  mutation: (data: T) => Promise<T>
}

export const useDataMutation = <T>({key, mutation}: UseDataMutation<T> ) => {

  const { mutate: reactQueryMutate, isLoading } = useMutation((data: T) => mutation(data))
  const queryClient = useQueryClient()

  const mutate = async (data: T) => {
    await Promise.all([
      reactQueryMutate(data),
      queryClient.invalidateQueries(key)
    ])
  }

  return {mutate, isLoading}
}