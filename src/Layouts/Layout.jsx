import React from 'react'
import { Outlet } from 'react-router-dom';

import { MenuProvider } from '../contexts/MenuContext';
import { DeviceProvider } from '../contexts/DeviceContext';

import Header from '../components/Header'
import MenuMobile from '../components/MenuMobile';

const Layout = () => {
    return (
        <>
            <DeviceProvider>
            <MenuProvider>
                <Header />
                <MenuMobile />
            </MenuProvider>
            </DeviceProvider>
            
            <Outlet />
            
        </>
    )
}

export default Layout
