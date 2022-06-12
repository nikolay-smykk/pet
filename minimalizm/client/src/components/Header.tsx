import { Link } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => {
  return (
    <div>
      <ColorModeSwitcher />
      <h1>Header</h1>
      <Link to='/'>
        <p>Home</p>
      </Link>
    </div>
  )
}
