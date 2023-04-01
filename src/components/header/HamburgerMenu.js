import React from "react"
import { HamburgerContainer } from "../../styles/header/Header-styled"

const HamburgerMenu = ({showMenu, setShowMenu}) => {

    showMenu ? document.querySelector('html').style.overflowY = 'clip' : document.querySelector('html').style.overflowY = 'scroll'

    return (
        <HamburgerContainer showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
            <div />
            <div />
            <div />
        </HamburgerContainer>
    )
}

export default HamburgerMenu