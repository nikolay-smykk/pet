import { useEffect, useState } from 'react'

export const useFetch = (url: RequestInfo | URL) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (e: any) {
      setError(e)
    }
    return { loading, error, data }
  }

  useEffect(() => {
    fetchData()
  }, [])
}
