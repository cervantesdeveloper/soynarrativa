import React, {createContext, useState} from "react";

const MenuProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    const burgerClick= ()=>{
        setIsOpen(!isOpen)
        
    }
    
    const logoClick = ()=>{
        setIsOpen(false)
    }

    const data = {isOpen, burgerClick, logoClick};

    return(
        <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
    )
}

const MenuContext = createContext();

export {MenuProvider};
export default MenuContext;