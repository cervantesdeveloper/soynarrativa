import React, {useContext} from 'react'

import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import DeviceContext from '../contexts/DeviceContext';

const Header = () => {

  const {isMobile} = useContext(DeviceContext);
  
  return (
    <header className='header'>
      {
        isMobile
        ? <NavMobile/>
        : <NavDesktop/>
      }

    </header>
  )
}

export default Header;
