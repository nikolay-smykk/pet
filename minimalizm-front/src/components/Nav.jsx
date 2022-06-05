import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink className="nav-link" to="/bag">
                Bag
            </NavLink>
        </nav>
    );
};
