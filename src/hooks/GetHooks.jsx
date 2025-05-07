import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetData = (url) => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await axios.get(url)
      return res.data
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}

export default useGetData
