import { Outlet } from "react-router-dom"

import { DeviceProvider } from "../contexts/DeviceContext"
import ServicesHero from "../components/ServicesHero"
import NavServices from "../components/NavServices"

const LayoutServices = () => {
  return (
    <>
        <ServicesHero />
        <DeviceProvider>
          <NavServices />
        </DeviceProvider>

        <Outlet/>
      
    </>
  )
}

export default LayoutServices
