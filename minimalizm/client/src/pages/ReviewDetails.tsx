import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const ReviewDetails = () => {
  const { detailsId } = useParams()
  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/products/${detailsId}`,
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  console.log(data.data.attributes.img.data[0].attributes.url)
  return (
    <div>
      <h1>{data.data.attributes.title}</h1>
      <p>{data.data.attributes.description}</p>
      <img
        src={
          'http://localhost:1337' +
          data.data.attributes.img.data[0].attributes.url
        }
        alt={data?.data?.attributes?.title}
      />
    </div>
  )
}
