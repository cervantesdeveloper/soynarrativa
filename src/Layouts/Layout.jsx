import React from 'react'
import Header from '../components/Header'

import { MenuProvider } from '../contexts/MenuContext';
import { DeviceProvider } from '../contexts/DeviceContext';

const Layout = () => {
    return (
        <>
            <DeviceProvider>
            <MenuProvider>
                <Header />
            </MenuProvider>
            </DeviceProvider>
            
        </>
    )
}

export default Layout
