import React from 'react'
import Header from '../components/Header'

import { MenuProvider } from '../contexts/MenuContext';
import { DeviceProvider } from '../contexts/DeviceContext';
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
            
        </>
    )
}

export default Layout
