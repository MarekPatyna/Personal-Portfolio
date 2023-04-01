import { React, useEffect, useState } from "react"
import { Container } from "../../styles/header/Header-styled"
import DesktopHeader from "../../components/header/DesktopHeader"
import MobileHeader from "../../components/header/MobileHeader"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const handleReSize = () => {
            window.innerWidth >= 750 && setShowMenu(false)
        }
        window.addEventListener('resize', handleReSize)
        return () => window.removeEventListener('resize', handleReSize)
    }, [])

    const lngs = {
        en: { nativeName: 'EN' },
        pl: { nativeName: 'PL' }
    }

    return (
        <Container data-aos="fade-down" data-aos-duration="500" data-aos-easing="linear">
            <DesktopHeader showMenu={showMenu} setShowMenu={setShowMenu} lngs={lngs}/>
            <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} lngs={lngs}/>
        </Container>
    )
}

export default Header