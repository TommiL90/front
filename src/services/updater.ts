import api from "./api"

export const updater = async <T, V>(
  url: string,
  {
    arg,
  }: {
    arg: T
  },
): Promise<V> => {
  const response = await api.put<V>(url, arg, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response.data
}
