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
              <p>En Narrtiva construimos marcas con propósito.</p>
              <p>Somos un colectivo creativo especializado en Branding que transforma ideas en identidades auténticas, coherentes y memorables.</p>
              <p>Nos enfocamos en desarrollar marcas que no solo se vean bien, sino que comuniquen, conecten y trasciendan.</p>
              <p>A través de diseño estratégico, narrativa visual y un enfoque consciente, creamos marcas con alma, pensadas para generar impacto real.</p>
                
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
