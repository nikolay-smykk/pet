import { useEffect, useState } from 'react'

export const useFetch = (url: RequestInfo | URL) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<any>(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setLoading(false)
    } catch (e: any) {
      setError(e)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { loading, error, data }
}
