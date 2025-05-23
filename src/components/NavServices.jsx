import {useContext, useRef} from 'react';

import DeviceContext from '../contexts/DeviceContext';
import { NavLink } from 'react-router-dom';

const NavServices = () => {
    const navRef = useRef(null);
    const plusRef = useRef(null)
    const {isMobile} = useContext(DeviceContext);


    const handleClick = ()=>{
        navRef.current.classList.toggle("nav-open");
        plusRef.current.classList.toggle("plus-open");
    }

    const MobileServices = ()=>{
        return (
            <>
                <div 
                    className='iconPlus' 
                    onClick={handleClick}
                    ref={plusRef}
                >
                    <span></span>
                    <span></span>
                </div>

                <nav className={`services-menu__mobile`} ref={navRef}>
                
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
