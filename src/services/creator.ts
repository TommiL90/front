import api from './api'

export const creator = async <T, V>(
  url: string,
  {
    arg,
  }: {
    arg: T
  }
): Promise<V> => {
  const response = await api.post<V>(url, arg, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
}
