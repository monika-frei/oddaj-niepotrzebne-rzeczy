import React from 'react'
import MobileMenu from './menu/MobileMenu'
import Menu from './menu/Menu'

function Header() {
    return(
        <header>
            <Menu />
            <MobileMenu />
        </header>
    )
}

export default Header