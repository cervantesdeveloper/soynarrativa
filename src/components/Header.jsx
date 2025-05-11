import {useContext} from 'react'

import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import Btn from './Btn';

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
      {!isMobile && <Btn text="CONTACTO" />}
    </header>
  )
}

export default Header;
