import {useQuery} from "react-query";

interface UseData<T> {
  key: string,
  fetcher: () => Promise<T>
}

interface Response <T> {
  data: T | undefined
  error: string | null |undefined
  isLoading: boolean
}

export const useData = <T>({key, fetcher} :UseData<T>): Response<T> => {
  const {data, error, status} = useQuery<T, string>(key, fetcher)
  return {data, error, isLoading: 'loading' === status}
}