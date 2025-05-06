import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "/LogoBrain.svg";

const NavDesktop = () => {
    return (
        <nav className='navDesktop'>
            <ul>
                <li><NavLink to="about">NOSOTROS</NavLink></li>
                <li><NavLink to="portfolio">PROYECTOS</NavLink></li>
                <li><NavLink to="services">SERVICIOS</NavLink></li>
            </ul>

            <NavLink to="">
                <img 
                    src={logo} 
                    alt="" 
                />
            </NavLink>

            <Link to="contact">
                <div className="btn btn__cta">
                    CONTACTO
                </div>
            </Link>

        </nav>

        
        
        
    )
}

export default NavDesktop
