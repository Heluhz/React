import { Outlet, NavLink } from 'react-router-dom';
import AuthStatus from './AuthStatus';

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </nav>

            <AuthStatus /> {/* Show login status and toggle button */}
            
            <hr />
            
            <Outlet />
        </div>
    );
};

export default Layout;
