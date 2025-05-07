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
        </div>
      </main>
    )
}

export default Home
