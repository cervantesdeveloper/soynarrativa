import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';

import logo from "/LogoBrain.svg";
import Burger from './Burger';

import MenuContext from '../contexts/MenuContext';

const NavMobile = () => {
    const {isOpen, burgerClick, logoClick} = useContext(MenuContext);


    return (
        <nav className='navMobile'>
            <NavLink to="">
                <img src={logo} alt="" />
            </NavLink>
            <Burger isOpen={isOpen} burgerHandleClick={burgerClick}/>
        </nav>
  )
}

export default NavMobile
