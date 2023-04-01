import React from "react"
import {
  Mobile,
  MobileMenu,
  LinkScrollMobile,
  LanguageIcon,
  LanguageMobile,
} from "../../styles/header/Header-styled"
import { FaHome } from "react-icons/fa"
import { BsFillBriefcaseFill, BsFillPersonFill } from "react-icons/bs"
import { IoIosContact } from "react-icons/io"
import { useTranslation } from "react-i18next"

const MobileHeader = ({showMenu, setShowMenu, lngs}) => {

    const handleClick = () => setShowMenu(!showMenu)
    const { t, i18n } = useTranslation()

    return (
        <Mobile showMenu={showMenu} as="section">
            <MobileMenu>
                <li>
                    <LinkScrollMobile to="scrollH" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
                        <span><FaHome /></span>
                        <label>{t('headerHome')}</label>
                    </LinkScrollMobile>
                </li>
                <li>
                    <LinkScrollMobile to="scrollA" spy={true} smooth={true} offset={-25} duration={500} onClick={handleClick}>
                        <span><BsFillPersonFill /></span>
                        <label>{t('headerAbout')}</label>
                    </LinkScrollMobile>
                </li>
                <li>
                    <LinkScrollMobile to="scrollP" spy={true} smooth={true} offset={-25} duration={500} onClick={handleClick}>
                        <span><BsFillBriefcaseFill /></span>
                        <label>{t('headerPortfolio')}</label>
                    </LinkScrollMobile>
                </li>
                <li>
                    <LinkScrollMobile to="scrollC" spy={true} smooth={true} offset={-25} duration={500} onClick={handleClick}>
                        <span><IoIosContact /></span>
                        <label>{t('headerContact')}</label>
                    </LinkScrollMobile>
                </li>
                <li>
                    <LanguageMobile>
                        <span><LanguageIcon /></span>
                        <div>
                            {Object.keys(lngs).map((lng) => (
                                <button
                                    key={lng}
                                    style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                                    type="submit" onClick={() => {i18n.changeLanguage(lng); window.location.reload()}} >
                                    {lngs[lng].nativeName}
                                </button>
                            ))}
                        </div>
                    </LanguageMobile>
                </li>
            </MobileMenu>
        </Mobile>
    )
}

export default MobileHeader