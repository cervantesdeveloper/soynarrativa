import React from 'react'

function Burger({isOpen, burgerHandleClick}){
    return (
        <div className={`burger ${isOpen ? "burger__open" : "burger__closed"}`} onClick={burgerHandleClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger;
