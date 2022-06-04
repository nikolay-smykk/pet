import { NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<nav className="nav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/bag">Bag</NavLink>
		</nav>
	)
}