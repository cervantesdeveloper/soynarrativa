import React, {useContext} from 'react';
import DeviceContext from '../contexts/DeviceContext';
import MenuContext from '../contexts/MenuContext';

import Burger from './Burger';
import NavDesktop from './NavDesktop';


const HomeHeader = () => {
        const {isMobile} = useContext(DeviceContext);
        const {isOpen, burgerClick} = useContext(MenuContext);
  return (
    <header className='home-header'>
        {
            isMobile
            ? <Burger isOpen={isOpen} burgerHandleClick={burgerClick}/>
            : <NavDesktop />
        }
    </header>
  )
}

export default HomeHeader
