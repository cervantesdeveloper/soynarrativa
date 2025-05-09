import React from 'react';
import { Link } from 'react-router-dom';

import {MenuProvider} from "../contexts/MenuContext";
import {DeviceProvider} from "../contexts/DeviceContext";

import Btn from "../components/Btn";
import monogram from "/monogram.svg";
import HomeCarousel from '../components/HomeCarousel';
import HomeHeader from '../components/HomeHeader';
import MenuMobile from '../components/MenuMobile';
import MediaMenu from '../components/MediaMenu';

const Home = () => {
    return (
      <>
        <MenuProvider >
          <DeviceProvider>
            <HomeHeader />
            <MenuMobile />
          </DeviceProvider>
          </MenuProvider>

        <main className='home-hero'>
          <HomeCarousel />
          <div className="home-hero__title">
            <img src={monogram} alt="soy narrativa" />
            <div className="home-hero__text">
              <p>Vivimos, construimos y provocamos historias.</p>
              <p>Creamos espacios donde las marcas se encuentran con las personas de forma auténtica, estética y con propósito. Somos un colectivo de mentes creativas especializado en branding que explora la narrativa visual, como un acto de creación consciente y estratégico.</p>
            </div>
            <Link to={"portfolio"}>
              <Btn text="NUESTRO TRABAJO"/>
            </Link>
            <MediaMenu />
          </div>
          
        </main>
      </>
    )
}

export default Home
