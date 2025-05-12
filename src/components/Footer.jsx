
import { useContext } from 'react';

import DeviceContext from '../contexts/DeviceContext';

import MediaMenu from './MediaMenu';

const Footer = () => {
  const {isMobile} = useContext(DeviceContext);
  return (
    <>
    {
      !isMobile &&
      (
        <footer className='footer'>
          <MediaMenu />
        </footer>
      )
    }
    </>
    
    
  )
}

export default Footer
