import {useContext} from 'react'

import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';
import Btn from './Btn';

import DeviceContext from '../contexts/DeviceContext';
import { Link } from 'react-router-dom';

const Header = () => {

  const {isMobile} = useContext(DeviceContext);
  
  return (
    <header className='header'>
      {
        isMobile
        ? <NavMobile/>
        : <NavDesktop/>
      }
      {!isMobile && <Link to="contact"><Btn text="CONTACTO" /></Link>}
    </header>
  )
}

export default Header;
