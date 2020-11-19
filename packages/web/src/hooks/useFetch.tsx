import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data = any, Error = any>(
  url: string
) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    try {
      const response = await api.get(url)

      return response.data
    } catch (err) {
      console.error(err)
    }
  })

  return { data, error, mutate }
}
