import React from 'react'

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

const MediaMenu = () => {
  return (
    <nav className='menu-media'>
        <a href="https://www.facebook.com/soynarrativa?locale=es_LA" target='_blank'><img src={facebook} alt="facebook" /></a>
        <a href="https://www.instagram.com/soynarrativa/?igsh=eW1oc2VodzYydmdx&utm_source=qr#" target='_blank'><img src={instagram} alt="instagram" /></a>
    </nav>
  )
}

export default MediaMenu;
