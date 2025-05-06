import React, {useContext} from 'react'
import DeviceContext from '../contexts/DeviceContext'
import MenuContext from '../contexts/MenuContext';
import { NavLink, Link } from 'react-router-dom';

const MenuMobile = () => {
    const {isMobile} = useContext(DeviceContext);
    const {isOpen} = useContext(MenuContext);
    return (
        !isMobile 
        ?  <></>
        : (
            <nav 
            className={
                `menuMobile ${isOpen ? "menuMobileOpen" : "menuMobileClosed"}`
                }
            >
                <NavLink to="about">NOSOTROS</NavLink>
                <NavLink to="portfolio">PROYECTOS</NavLink>
                <NavLink to="services">SERVICIOS</NavLink>
                <Link to="contact">
                    <div className="btn btn__cta">
                        CONTACTO
                    </div>
                </Link>
            </nav>
        )
       
    )
}

export default MenuMobile
