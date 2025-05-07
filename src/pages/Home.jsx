import React from 'react';
import { Link } from 'react-router-dom';

import {MenuProvider} from "../contexts/MenuContext";
import {DeviceProvider} from "../contexts/DeviceContext";

import Btn from "../components/Btn";
import HomeCarousel from '../components/HomeCarousel';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
    return (
      <main className='home-hero'>
        <MenuProvider >
        <DeviceProvider>
          <HomeHeader />
        </DeviceProvider>
        </MenuProvider>

        <HomeCarousel />
        <div className="home-hero__title">
          <Link to="/projects">
            {/* <img src="" alt="SOY NARRATIVA" /> */}
            {/* <Btn text="ENTRAR"/> */}
          </Link>
        </div>
      </main>
    )
}

export default Home
