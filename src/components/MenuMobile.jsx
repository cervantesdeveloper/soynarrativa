import {useContext} from 'react'
import DeviceContext from '../contexts/DeviceContext'
import MenuContext from '../contexts/MenuContext';
import { NavLink, Link } from 'react-router-dom';

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

const MenuMobile = () => {
    const {isMobile} = useContext(DeviceContext);
    const {isOpen, logoClick} = useContext(MenuContext);
    return (
        !isMobile 
        ?  <></>
        : (
            <nav 
            onClick={logoClick}
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
                <div className="menuMobile__media">
                    <a 
                    href="https://www.facebook.com/soynarrativa?locale=es_LA" target='_blank'
                    >
                        <img src={facebook} alt="facebook" />
                    </a>

                    <a 
                    href="https://www.instagram.com/soynarrativa/?igsh=eW1oc2VodzYydmdx&utm_source=qr#" 
                    target='_blank'
                    >
                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
            </nav>
        )
       
    )
}

export default MenuMobile
