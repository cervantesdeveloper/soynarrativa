import React from 'react'
import Header from '../components/Header'

import { MenuProvider } from '../contexts/MenuContext'

const Layout = () => {
    return (
        <>
            <MenuProvider>
                <Header />
            </MenuProvider>
            
        </>
    )
}

export default Layout
