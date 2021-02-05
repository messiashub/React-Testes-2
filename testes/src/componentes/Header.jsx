import React from 'react'
import Nav from './header/Nav'
import ButtonMob from './header/ButtonMob'
import Logo from './header/Logo'
import Address from './header/Address'


function Header(){
    return(
        <div className="header">
            <Nav/>
            <ButtonMob/>
            <Logo/>
            <Address/>
        </div>
    )
}

export default Header;