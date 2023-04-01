import styled from "styled-components"
import { FaHome } from "react-icons/fa"
import { BsFillBriefcaseFill, BsFillPersonFill } from "react-icons/bs"
import { IoIosContact } from "react-icons/io"
import { MdOutlineLanguage } from "react-icons/md"
import { Link } from "react-scroll"
import { colors } from "../styled/Global"

export const Container = styled.div`
  position: fixed;
  height: 5rem;
  width: 100%;
  top: 0;
  background: ${colors.headerBg};
  -webkit-box-shadow: 0 0.5rem 0.3125rem ${colors.headerShadow};
  -moz-box-shadow: 0 0.5rem 0.3125rem ${colors.headerShadow};
  box-shadow: 0 0.5rem 0.3125rem ${colors.headerShadow};
  z-index: 1050;
  padding: 0 1.5625rem 0 1.5625rem;
  font-weight: 700;
  @media (max-width: 850px) {
    padding: 0;
  }
`

export const DesktopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div`
  width: 5rem;
  height: 5rem;
  img {
    max-width: 130%;
    &:hover {
      cursor: pointer;
    }
  }
`

export const HeaderMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  font-size: 1.25rem;
  margin-right: 1.25rem;
  li {
    margin-left: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 850px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export const LinkScroll = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${colors.mainColorAccent};
    font-size: 1.1875rem;
  }
  label {
    margin-left: 0.3125rem;
    transition-duration: .25s;
    transition-timing-function: ease-out;
    &:hover {
      opacity: 70%;
    }
  }
`

export const HeaderMobileItem = styled.div`
  display: none;
  font-size: 2.8125rem;
  z-index: 999;
  @media(max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const HamburgerContainer = styled.div`
  width: 2rem;
  height: 1.6rem;
  top: 0.9375rem;                      
  right: 0.9375rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  div {
    width: 2.06rem;
    height: 0.25rem;
    background-color: ${colors.mainFont};
    border-radius: 0.625rem;
    transform-origin: 0.0625rem;
    transition: all 0.088s linear;
    &:nth-child(1) {
      transform: ${({showMenu}) => showMenu ? 'rotate(45deg)' : ''};
      background-color: ${({showMenu}) => showMenu ? colors.mainFont : ''};
    }
    &:nth-child(2) {
      opacity: ${({showMenu}) => showMenu ? 0 : 1};

    }
    &:nth-child(3) {
      transform: ${({showMenu}) => showMenu ? 'rotate(-45deg)' : ''};
      background-color: ${({showMenu}) => showMenu ? colors.mainFont : ''};
    }
  }
`

export const Mobile = styled.section`
  width: min(70%, 21.875rem);
  height: 100vh;
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.mobileBg};
  visibility: ${(props) => props.showMenu ? 'visible' : 'hidden'};
  transform: translateX(${(props) => props.showMenu ? '0' : '100%'});
  transition-duration: 0.3s;
  @media (min-width: 851px) {
    display: none !important;
  }
`

export const MobileMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 6.25rem;
`

export const LinkScrollMobile = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 2.8125rem;
  font-size: 1.5625rem;
  span {
    color: ${colors.mainColorAccent};
  }
  label {
    font-size: 1.25rem;
    margin-top: 0.3125rem;
    &:hover {
      opacity: 70%;
    }
  }
`

export const LanguageMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 2.8125rem;
  span {
    svg {
      font-size: 1.5625rem;
    }
  }
  div {
    margin-top: 0.1875rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    min-width: 3.75rem;
    button {
      
    }
  }
`

export const HomeIcon = styled(FaHome)`
  margin-bottom: 0.09375rem;
`

export const AboutIcon = styled(BsFillPersonFill)`
  margin-bottom: 0.09375rem;
`

export const PortfolioIcon = styled(BsFillBriefcaseFill)`
  margin-bottom: 0.09375rem;
`

export const ContactIcon = styled(IoIosContact)`
  font-size: 1.375rem;
  margin-bottom: 0.09375rem;
`

export const LanguageIcon = styled(MdOutlineLanguage)`
  font-size: 1.3125rem;
  margin-bottom: 0.19375rem;
  margin-right: 0.1875rem;
  &:hover {
    cursor: auto;
  }
`