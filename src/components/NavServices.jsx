import {useContext, useState} from 'react';

import DeviceContext from '../contexts/DeviceContext';
import { NavLink } from 'react-router-dom';

const NavServices = () => {
    const {isMobile} = useContext(DeviceContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const MobileServices = ()=>{
        return (
            <>
                <div 
                    className={`iconPlus ${isOpen ? "iconOpen" : "iconClosed"}`}
                    onClick={handleClick}
                >
                    <span></span>
                    <span></span>
                </div>

                <nav className={`services-menu__mobile ${isOpen ? "nav-open" : "nav-closed"}`}>
                
                <ul>
                    <li onClick={handleClick}>
                        <NavLink to={"branding"}>Branding</NavLink>
                    </li>
                    
                    <li onClick={handleClick}>
                        <NavLink to={"media"}>Social Media</NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink to={"packaging"}>Packaging</NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink to={"stationery"}>Papelería</NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink to={"photo"}>Fotografía de Producto</NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink to={"naming"}>Naming</NavLink>
                    </li>
                </ul>
                
            </nav>
            </>
            
            
            
        )
    }


    const DesktopServices = ()=>{
        return (
            <nav className='services-menu__desktop'>
                
                <NavLink to={"branding"}>Branding</NavLink>
            
                <NavLink to={"media"}>Social Media</NavLink>

                <NavLink to={"packaging"}>Packaging</NavLink>

                <NavLink to={"stationery"}>Papelería</NavLink>
            
                <NavLink to={"photo"}>Fotografía de Producto</NavLink>
            
                <NavLink to={"naming"}>Naming</NavLink>
            </nav>
        )
    }


    return (
        isMobile
        ? <MobileServices />
        : <DesktopServices />
    )
}

export default NavServices
