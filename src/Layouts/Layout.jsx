import { Outlet } from 'react-router-dom';

import { MenuProvider } from '../contexts/MenuContext';
import { DeviceProvider } from '../contexts/DeviceContext';

import Header from '../components/Header'
import MenuMobile from '../components/MenuMobile';
import Footer from '../components/Footer';

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
            
            <DeviceProvider>
                <Footer />
            </DeviceProvider>
        </>
    )
}

export default Layout
