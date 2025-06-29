import { NavLink } from 'react-router-dom';

const NavDesktop = () => {
    return (
        <nav className='navDesktop'>
            <ul>
                <li>
                    <NavLink to="about">NOSOTROS</NavLink>
                </li>

                <li>
                    <NavLink to="portfolio">PROYECTOS</NavLink>
                </li>

                <li>
                    <NavLink to="services">SERVICIOS</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavDesktop
