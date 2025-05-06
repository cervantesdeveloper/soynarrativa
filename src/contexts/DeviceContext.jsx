import { createContext, useState } from "react";

const DeviceContext = createContext();

const DeviceProvider = ({children})=>{
    let breakpoint = window.matchMedia("(max-width: 767px)");

    const [isMobile, setIsMobile] = useState(breakpoint.matches);

    const responsive = ()=>{
        breakpoint.matches
        ? setIsMobile(true)
        : setIsMobile(false)
    }

    breakpoint.addListener(responsive);
    const data = {isMobile}

    return(
        <DeviceContext.Provider value={data}>{children}</DeviceContext.Provider>
    )
}

export {DeviceProvider};
export default DeviceContext;

