import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
export const Home = () => {
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/products',
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>
  return (
    <div>
      {data.data.map((el: any) => (
        <div key={el.id + 'key'}>
          <span>{el.attributes.title}</span>

          <p>{el.attributes.description}</p>
          <Link to={`/details/${el.id}`}>Link to details</Link>
        </div>
      ))}
    </div>
  )
}
