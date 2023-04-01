import React from "react"
import {
  HeaderLogo,
  HeaderMenu,
  HeaderMobileItem,
  DesktopContainer,
  LinkScroll,
  AboutIcon,
  ContactIcon,
  HomeIcon,
  PortfolioIcon,
  LanguageIcon,
} from "../../styles/header/Header-styled"
import HamburgerMenu from "./HamburgerMenu"
import logo from "../../assets/img/logo.png"
import { useTranslation } from "react-i18next"

const DesktopHeader = ({showMenu, setShowMenu, lngs}) => {

    const { t, i18n } = useTranslation()

    return (
        <DesktopContainer>
            <HeaderLogo data-aos="zoom-out-right" data-aos-duration="700" data-aos-easing="linear">
                <LinkScroll to="scrollH" spy={true} smooth={true} offset={0} duration={500}>
                    <img src={logo} alt="logo"/>
                </LinkScroll>
            </HeaderLogo>
            <HeaderMenu>
                <li data-aos="fade-down" data-aos-duration="700" data-aos-easing="linear">
                    <LinkScroll to="scrollH" spy={true} smooth={true} offset={0} duration={500}>
                        <span><HomeIcon /></span>
                        <label>{t('headerHome')}</label>
                    </LinkScroll>
                </li>
                <li data-aos="fade-down" data-aos-duration="850" data-aos-easing="linear">
                    <LinkScroll to="scrollA" spy={true} smooth={true} offset={-25} duration={500}>
                        <span><AboutIcon /></span>
                        <label>{t('headerAbout')}</label>
                    </LinkScroll>
                </li>
                <li data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear">
                    <LinkScroll to="scrollP" spy={true} smooth={true} offset={-25} duration={500}>
                        <span><PortfolioIcon /></span>
                        <label>{t('headerPortfolio')}</label>
                    </LinkScroll>
                </li>
                <li data-aos="fade-down" data-aos-duration="1150" data-aos-easing="linear">
                    <LinkScroll to="scrollC" spy={true} smooth={true} offset={-25} duration={500}>
                        <span><ContactIcon /></span>
                        <label>{t('headerContact')}</label>
                    </LinkScroll>
                </li>
                <li data-aos="fade-down" data-aos-duration="1300" data-aos-easing="linear">
                    <LanguageIcon />
                    {Object.keys(lngs).map((lng) => (
                        <button
                            key={lng}
                            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', cursor: "pointer", marginLeft: "3px"}}
                            type="submit" onClick={() => {i18n.changeLanguage(lng); window.location.reload()}} >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </li>
                <HeaderMobileItem data-aos="zoom-out-left" data-aos-duration="700" data-aos-easing="linear">
                    <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                </HeaderMobileItem>
            </HeaderMenu>
        </DesktopContainer>
    )
}

export default DesktopHeader